import React from 'react';

const topStyle = {
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '10px',
  gap: '20px',
  width: '760px',
  height: '50px',
  fontSize: '20px',
  alignItems: 'center',
  border: '0.1px solid white',
};
const headStyle = {
  paddingTop: '40px',
  paddingBottom: '30px',
  display: 'flex',
  fontSize: '30px',
  flexDirection: 'column',
  alignItems: 'center',
};
const containerStyle = {
  paddingTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '20px',
};

const NewsHeader = () => {
  return (
    <div style={containerStyle}>
      <div style={headStyle}>
        멋사 NEWS
      </div>
      <div style={topStyle}>
        <p>전체</p>
        <p>스포츠</p>
        <p>연예</p>
        <p>경제</p>
      </div>
    </div>
  );
};

export default NewsHeader;