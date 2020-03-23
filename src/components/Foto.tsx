import React from 'react';

const Foto: React.FC<{ data: any }> = ({ data }) => {
  const noFoto = 'https://sistema.ravex.com.br/assets/fotos/_nofoto.png';
  return (
    <img
      src={data.value || noFoto}
      ref={React.createRef()}
      alt="Foto"
      height="20px"
    />
  );
};

export default Foto;
