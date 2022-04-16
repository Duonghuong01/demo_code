import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Image, ListGroup, Row } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SERVER } from '../../apis/API';
import Profile3 from "../../assets/img/team/profile-picture-3.jpg";
import { getDashboardVoteUserThunk } from '../../redux/dashboardSlice';

export default () => {

    const [data, setData] = useState([]);
    let dispatch = useDispatch();
    let search = async () => {
        let res = await dispatch(getDashboardVoteUserThunk());
        if (res) {
            setData(res)
        }
    }
    useEffect(() => {
        search() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const TeamMember = (props) => {
        const { index, user } = props;

        return (
            <ListGroup.Item className="px-0">
                <Row className="align-items-center">
                    <Col className="col-auto">
                        <a href="#top" className="user-avatar">

                            {user?._id.photoURL ? <Image src={`${SERVER.URL_IMAGE}${user._id.photoURL}`} className="rounded-circle" />
                                : <Image src={Profile3} className="rounded-circle" />
                            }
                        </a>
                    </Col>
                    <Col className="ms--2">
                        <h4 className="h6 mb-0">
                            <a href="#!">{user?._id?.fullName}</a>
                        </h4>
                        <span className={`text-red`}>Amount votes: </span>
                        <small>{user?.totalVote}</small>
                    </Col>
                    <Col className="col-auto">
                        <Button variant="tertiary" size="sm">
                            <FontAwesomeIcon icon={faAddressBook} className="me-1" /> #{index}
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    };

    return (
        <Card border="light" className="shadow-sm">
            <Card.Header className="border-bottom border-light d-flex justify-content-between">
                <h5 className="mb-0">Team members</h5>
                <Button variant="secondary" size="sm">See all</Button>
            </Card.Header>
            <Card.Body>
                <ListGroup className="list-group-flush list my--3">
                    {data.map((user, index) => <TeamMember key={index} index={index + 1} user={user} />)}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}