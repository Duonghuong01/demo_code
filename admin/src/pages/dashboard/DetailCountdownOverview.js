import { Card, Col, Dropdown, Row, Table } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDashboardCountdownThunk, getDashboardDetailCountdownThunk } from '../../redux/dashboardSlice';


export default () => {
    const [countdowns, setCountdowns] = useState([]);
    const [countdown, setCountdown] = useState();
    const [countdownSelect, setCountdownSelect] = useState();
    let dispatch = useDispatch();
    let search = async () => {
        let res = await dispatch(getDashboardCountdownThunk());
        if (res.length > 0) {
            setCountdowns(res)
            let data = await dispatch(getDashboardDetailCountdownThunk(`${res[0]?._id}`));
            setCountdownSelect(res[0]);
            if (data) {
                setCountdown(data);
            }
        }
    }
    let searchDetail = async () => {
        if (countdownSelect?._id) {
            let data = await dispatch(getDashboardDetailCountdownThunk(countdownSelect?._id.toString()));
            if (data) {
                setCountdown(data)
            }
        }
    }
    const returnPercent = (data) => {
        if (countdown?.total > 0) {
            return `${Number(Number(data?.votes?.length) * 100 / countdown?.total).toFixed(2)} %`
        } else {
            return null
        }
    }
    useEffect(() => {
        searchDetail() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countdownSelect])
    useEffect(() => {
        search() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const TableRow = (props) => {
        const { product, index } = props;

        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{product?.product?.title}</td>
                <td>{product?.product?.author}</td>
                <td>{product?.votes?.length}</td>
                <td>{returnPercent(product)}</td>
                {/* <td>
                    <FontAwesomeIcon icon={bounceIcon} className={`${bounceTxtColor} me-3`} />
                    {Math.abs(bounceRate)}%
                </td> */}
            </tr>
        );
    };

    return (
        <Card border="light" className="shadow-sm">
            <Card.Header>
                <Row className="align-items-center">
                    <Col>
                        <h5>Countdown vote</h5>
                    </Col>
                    <Col className="text-end">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {countdownSelect?.title}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {countdowns.map((item, index) => {
                                    return (
                                        <Dropdown.Item key={index} onClick={() => setCountdownSelect(item)} >{item?.title}</Dropdown.Item>
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <h5>Total vote ({countdown?.total}) </h5>
                </Row>
            </Card.Header>
            <Table responsive className="align-items-center table-flush">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Votes</th>
                        <th scope="col">Percent</th>
                    </tr>
                </thead>
                <tbody>
                    {countdown?.products?.length > 0 &&
                        countdown?.products?.map((item, index) => {
                            return <TableRow key={index} product={item} index={index + 1} />
                        })
                    }
                </tbody>
            </Table>
        </Card>
    );
}