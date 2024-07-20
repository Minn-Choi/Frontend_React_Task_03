import React from 'react';
import DGULikeLion from "../../assets/images/DGU_LikeLion.png";

const imgStyle = {
  display:'flex',
  marginRight:'20px',
  flexDireation:'row',
  width: '200px',
  height:'120px', 
  marginBottom: '10px',
};
const cardStyle = {
  display:'flex',
  flexDireation:'row',
  padding: '10px',
  marginBottom: '20px',
  width: '780px',
  margin: '0 auto', 
  textAlign: 'center',
};
const LionStyle = {
  display:'flex',
  marginRight:'20px',
  width: '200px',
  height:'110px', 
  alignItems: 'center',
  justifyContent: 'center'
};
const titleStyle = {
  display:'flex',
  width: '560px',
  fontSize:'15px',
  paddingTop:'5px',
};

const NewsCard = ({ article }) => {
  const { urlToImage, title } = article;

  return (
    <div style={cardStyle}>
      {urlToImage ? (
        <img 
          src={urlToImage} 
          alt={title} 
          style={imgStyle} 
        />
      ) : (
            <img style={LionStyle} src={DGULikeLion} alt="LikeLion_Logo" />
      )}
      <h3 style={titleStyle}>{title}</h3>
    </div>
  );
};

export default NewsCard;