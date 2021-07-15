import React from 'react';

const Options = () => {
  const onClickDeleteAccessTokenButton = () => {
    // TODO: accessToken を破棄する為の処理を書く
    console.log('deleteAccessTokenButton clicked');
  };

  return (
    <>
      <p>機能一覧</p>
      <ul>
        <li>ページの url を webev に保存できます</li>
      </ul>
      <a href="https://itizawa-tech.growi.cloud/projects/webev/%E6%96%BD%E7%AD%96/www.webev.cloud/inquery" target="_blank" rel="noreferrer">お問い合わせ</a>
      <button onClick={onClickDeleteAccessTokenButton}>accessToken を削除する</button>
    </>
  );
};

export default Options;
