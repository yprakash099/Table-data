import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
`;

const Th = styled.th`
  background-color: #aafaf0;
  padding: 10px;
  text-align: left;
  border: 1px solid
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
  
  background-color:transparent; 
`;

const PlanHeader = styled.div`
  text-align: center;
  padding: 10px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px 20px; 
  margin: 4px 0;
  background-color: #ffcc00;
  border: none;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: #e6b800;
    transform: scale(0.5); 
  }
`;
const PlanContainer = styled.div`
  margin: 0 60px; 
`;
const ColoredTd = styled(Td)`
  background-color: #f7f6f5; 
`;


const PricingTable = () => {
  return (
    <Container>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '20px' }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <PlanContainer>
          <PlanHeader>Starter</PlanHeader>
          
          <Button>Start for free</Button>
        </PlanContainer>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <PlanContainer>
          <PlanHeader>Professional</PlanHeader>
          <Button>Start for free</Button>
        </PlanContainer>
        <PlanContainer>
          <PlanHeader>Enterprise</PlanHeader>
          <Button>Contact Sales</Button>
        </PlanContainer>
      </div>


      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th colSpan="4">Account</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Users</Td>
              <Td>2</Td>
              <ColoredTd>Unlimited</ColoredTd>
              <Td>Unlimited</Td>
            </tr>
            <tr>
              <Td>User Roles & Permissions</Td>
              <Td></Td>
              <ColoredTd>✔</ColoredTd>
              <Td>✔</Td>
            </tr>
            <tr>
              <Td>User Teams</Td>
              <Td></Td>
              <ColoredTd></ColoredTd>
              <Td>✔</Td>
            </tr>
            <tr>
              <Td>Runtime Environments</Td>
              <Td>1</Td>
              <ColoredTd>3</ColoredTd>
              <Td>Unlimited</Td>
            </tr>
            <tr>
              <Td>Usage</Td>
              <Td>Unlimited</Td>
              <ColoredTd>Unlimited</ColoredTd>
              <Td>Unlimited</Td>
            </tr>
            <tr>
              <Td>Database Migrations</Td>
              <Td>✔</Td>
              <ColoredTd>✔</ColoredTd>
              <Td>✔</Td>
            </tr>
            <tr>
              <Th colSpan="4">Connectors & Integrations</Th>
            </tr>
            <tr>
              <Td>Data Sources (200+)</Td>
              <Td>All</Td>
              <ColoredTd>All</ColoredTd>
              <Td>All</Td>
            </tr>
            <tr>
              <Td>Destinations</Td>
              <Td>All</Td>
              <ColoredTd>All</ColoredTd>
              <Td>All</Td>
            </tr>
            <tr>
              <Td>Multiple Destinations</Td>
              <Td>✔</Td>
              <ColoredTd>✔</ColoredTd>
              <Td>✔</Td>
            </tr>
            <tr>
              <Td>Kits (pre-built workflows)</Td>
              <Td>✔</Td>
              <ColoredTd>✔</ColoredTd>
              <Td>✔</Td>
            </tr>
            <tr>
              <Td>Reverse ETL</Td>
              <Td>✔</Td>
              <ColoredTd>✔</ColoredTd>
              <Td>✔</Td>
            </tr>
            <tr>
              <Td>Change Data Capture (CDC)</Td>
              <Td>✔</Td>
              <ColoredTd>✔</ColoredTd>
              <Td>✔</Td>
            </tr>
            <tr>
              <Td>API High-frequency Replication</Td>
              <Td></Td>
              <ColoredTd></ColoredTd>
              <Td>✔</Td>
            </tr>
            <tr>
              <Td>SQL Transformations</Td>
              <Td>Unlimited</Td>
              <ColoredTd>Unlimited</ColoredTd>
              <Td>Unlimited</Td>
            </tr>
            <tr>
              <Td>Python Transformations</Td>
              <Td></Td>
              <ColoredTd>Unlimited</ColoredTd>
              <Td>Unlimited</Td>
            </tr>
            <tr>
              <Td>Max Sync Frequency</Td>
              <Td>60 min</Td>
              <ColoredTd>15 min</ColoredTd>
              <Td>5 min</Td>
            </tr>
          </tbody>
        </Table>
        
      </TableContainer>
    </Container>
  );
};

export default PricingTable;
