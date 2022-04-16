
import { Row } from '@themesberg/react-bootstrap';
import React from "react";
import UserOverview from './UserOverview';


export default () => {
  return (
    <>
      <Row className="justify-content-md-center">
        {/* <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col> */}
        <UserOverview />
        {/* <ProductOverview />
        <CountdownOverview /> */}
      </Row>

      
    </>
  );
};
