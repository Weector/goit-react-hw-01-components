import styled from 'styled-components';

export const Table = styled.table`

    width: 760px;
    margin-top: 60px;
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color: #f3f5f6;
    border-radius: 4px;
     outline: 1px solid;
     border-collapse: collapse;
     box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  }
`;

export const THead = styled.thead`
    height: 40px;
    color: white;
    background-color: #005f98;
    
  }
`;

export const TableRow = styled.tr`
  ${({ type }) => {
    switch (type) {
      case 'invoice':
        return `background-color: #cfe8fa85;`;
      case 'payment':
        return `background-color: #e8faf8;`;
      case 'withdrawal':
        return `background-color: #e8fae8;`;
      case 'deposit':
        return `background-color: #fefcf6;`;
      default:
        return `background-color: #f3f4ff`;
    }
  }}
`;

export const TableCell = styled.th`
  height: 50px;
  outline-style: auto;
  outline: 1px solid #005f98;
`;
