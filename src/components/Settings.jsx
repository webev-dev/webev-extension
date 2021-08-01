import React from 'react';

const inquiryUrl = process.env.REACT_APP_CONTACT_URL;

const Options = () => {
  const onClickDeleteAccessTokenButton = () => {
    chrome.storage.local.remove(['apiTokenForExtension']);
  };

  return (
    <>
      <p>機能一覧</p>
      <ul>
        <li>ページの url を webev に保存できます</li>
      </ul>
      <a href={inquiryUrl} target="_blank" rel="noreferrer">お問い合わせ</a>
      <button onClick={onClickDeleteAccessTokenButton}>accessToken を削除する</button>
    </>
  );
};

export default Options;
