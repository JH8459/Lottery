import {
  convertDateFormat,
  convertKRLocaleStringFormat,
  convertNumberToCSSBackground,
  convertNumberToCSSTextShadow,
} from 'src/common/utils/utils';
import { LottoInfoInterface } from '../interface/mailInfo.interface';

export const emailTemplate = (lottoInfo: LottoInfoInterface) => {
  return `<!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&amp;display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <!--<![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
        }
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0;
          overflow: hidden;
        }
        .image_block img + div {
          display: none;
        }
  
        @media (max-width: 620px) {
          .social_block.desktop_hide .social-table {
            display: inline-block !important;
          }
          .image_block div.fullWidth {
            max-width: 100% !important;
          }
          .mobile_hide {
            display: none;
          }
          .row-content {
            width: 100% !important;
          }
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0;
          }
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    <body
      style="margin: 0; background-color: #f5fff5; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none"
    >
      <table
        class="nl-container"
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
      >
        <tbody>
          <tr>
            <td>
              <table
                class="row row-1"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 25px;
                                padding-left: 10px;
                                padding-right: 10px;
                                padding-top: 25px;
                                vertical-align: top;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="image_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0"
                              >
                                <tr>
                                  <td class="pad" style="width: 100%">
                                    <div class="alignment" align="center" style="line-height: 10px">
                                      <div style="max-width: 500px">
                                        <img
                                          src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/0bd8b69e-4024-4f26-9010-6e2a146401fb/logo%201.png"
                                          style="display: block; height: auto; border: 0; width: 100%"
                                          width="500"
                                          alt="enginemailer"
                                          title="enginemailer"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-2"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #1a7616;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 15px;
                                padding-left: 30px;
                                padding-right: 30px;
                                padding-top: 35px;
                                vertical-align: middle;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad" style="padding-bottom: 5px; padding-left: 5px; padding-right: 5px">
                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                      <div
                                        class
                                        style="
                                          font-size: 12px;
                                          font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                          mso-line-height-alt: 14.399999999999999px;
                                          color: #fff;
                                          line-height: 1.2;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            font-size: 14px;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <span style="font-size: 18px"
                                            >${convertDateFormat(lottoInfo.drwNoDate)} 추첨</span
                                          >
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table
                                class="text_block block-2"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad" style="padding-bottom: 10px; padding-left: 20px; padding-right: 20px">
                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                      <div
                                        class
                                        style="
                                          font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                          font-size: 12px;
                                          mso-line-height-alt: 14.399999999999999px;
                                          color: #fff;
                                          line-height: 1.2;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            font-size: 16px;
                                            text-align: center;
                                            mso-line-height-alt: 19.2px;
                                          "
                                        >
                                          <strong
                                            ><span style="font-size: 40px">${lottoInfo.drwNo}회 당첨결과</span></strong
                                          >
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-3"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #1a7616;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="image_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="padding-bottom: 40px; padding-left: 20px; padding-right: 20px; width: 100%"
                                  >
                                    <div class="alignment" align="center" style="line-height: 10px">
                                      <div class="fullWidth" style="max-width: 480px">
                                        <img
                                          src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/0bd8b69e-4024-4f26-9010-6e2a146401fb/7756309.jpg"
                                          style="display: block; height: auto; border: 0; width: 100%"
                                          width="480"
                                          alt="Happy birthday to you!"
                                          title="Happy birthday to you!"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-4"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          border-radius: 0;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                                padding-bottom: 20px;
                                padding-top: 20px;
                                vertical-align: top;
                                border-top: 0;
                                border-bottom: 0;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                      <div
                                        class
                                        style="
                                          font-size: 14px;
                                          font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                          mso-line-height-alt: 16.8px;
                                          color: #555;
                                          line-height: 1.2;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            font-size: 14px;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <strong><span style="font-size: 20px">🍀 로또 당첨 번호</span></strong>
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-5"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          border-radius: 0;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="14.2857142857142857%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                border-left: 1px solid #1a7616;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: middle;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                      <div
                                        style="
                                          font-size: 14px;
                                          font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                          text-align: center;
                                          vertical-align: middle;
                                          height: 40px;
                                          line-height: 40px
                                        "
                                      >
                                        <p
                                          style="display: inline-block; border-radius: 100%; vertical-align: middle; color: #fff; font-weight: 500; width: 40px; height: 40px; background: ${convertNumberToCSSBackground(
                                            lottoInfo.drwtNo1
                                          )}; text-shadow: ${convertNumberToCSSTextShadow(lottoInfo.drwtNo1)};"
                                        >
                                          ${lottoInfo.drwtNo1}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-2"
                              width="14.2857142857142857%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: middle;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                    <div
                                    style="
                                      font-size: 14px;
                                      font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                      text-align: center;
                                      vertical-align: middle;
                                      height: 40px;
                                      line-height: 40px
                                    "
                                  >
                                    <p
                                      style="display: inline-block; border-radius: 100%; vertical-align: middle; color: #fff; font-weight: 500; width: 40px; height: 40px; background: ${convertNumberToCSSBackground(
                                        lottoInfo.drwtNo2
                                      )}; text-shadow: ${convertNumberToCSSTextShadow(lottoInfo.drwtNo2)};"
                                        >
                                          ${lottoInfo.drwtNo2}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-3"
                              width="14.2857142857142857%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: middle;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                    <div
                                    style="
                                      font-size: 14px;
                                      font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                      text-align: center;
                                      vertical-align: middle;
                                      height: 40px;
                                      line-height: 40px
                                    "
                                  >
                                    <p
                                      style="display: inline-block; border-radius: 100%; vertical-align: middle; color: #fff; font-weight: 500; width: 40px; height: 40px; background: ${convertNumberToCSSBackground(
                                        lottoInfo.drwtNo3
                                      )}; text-shadow: ${convertNumberToCSSTextShadow(lottoInfo.drwtNo3)};"
                                        >
                                          ${lottoInfo.drwtNo3}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-4"
                              width="14.2857142857142857%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: middle;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                    <div
                                    style="
                                      font-size: 14px;
                                      font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                      text-align: center;
                                      vertical-align: middle;
                                      height: 40px;
                                      line-height: 40px
                                    "
                                  >
                                    <p
                                      style="display: inline-block; border-radius: 100%; vertical-align: middle; color: #fff; font-weight: 500; width: 40px; height: 40px; background: ${convertNumberToCSSBackground(
                                        lottoInfo.drwtNo4
                                      )}; text-shadow: ${convertNumberToCSSTextShadow(lottoInfo.drwtNo4)};"
                                        >
                                          ${lottoInfo.drwtNo4}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-5"
                              width="14.2857142857142857%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: middle;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                    <div
                                    style="
                                      font-size: 14px;
                                      font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                      text-align: center;
                                      vertical-align: middle;
                                      height: 40px;
                                      line-height: 40px
                                    "
                                  >
                                    <p
                                      style="display: inline-block; border-radius: 100%; vertical-align: middle; color: #fff; font-weight: 500; width: 40px; height: 40px; background: ${convertNumberToCSSBackground(
                                        lottoInfo.drwtNo5
                                      )}; text-shadow: ${convertNumberToCSSTextShadow(lottoInfo.drwtNo5)};"
                                        >
                                          ${lottoInfo.drwtNo5}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-6"
                              width="14.2857142857142857%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                    <div
                                    style="
                                      font-size: 14px;
                                      font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                      text-align: center;
                                      vertical-align: middle;
                                      height: 40px;
                                      line-height: 40px
                                    "
                                  >
                                    <p
                                      style="display: inline-block; border-radius: 100%; vertical-align: middle; color: #fff; font-weight: 500; width: 40px; height: 40px; background: ${convertNumberToCSSBackground(
                                        lottoInfo.drwtNo6
                                      )}; text-shadow: ${convertNumberToCSSTextShadow(lottoInfo.drwtNo6)};"
                                        >
                                          ${lottoInfo.drwtNo6}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-7"
                              width="14.2857142857142857%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                border-right: 1px solid #1a7616;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: middle;
                                border-top: 0;
                                border-left: 0;
                                border-bottom: 0;
                              "
                            >
                              <table
                                class="text_block block-7"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Tahoma, Verdana, sans-serif">
                                    <div
                                    style="
                                      font-size: 14px;
                                      font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                      text-align: center;
                                      vertical-align: middle;
                                      height: 40px;
                                      line-height: 40px
                                    "
                                  >
                                    <p
                                      style="display: inline-block; border-radius: 100%; vertical-align: middle; color: #fff; font-weight: 500; width: 40px; height: 40px; background: ${convertNumberToCSSBackground(
                                        lottoInfo.bnusNo
                                      )}; text-shadow: ${convertNumberToCSSTextShadow(lottoInfo.bnusNo)};"
                                        >
                                          ${lottoInfo.bnusNo}
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-6"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad" style="padding-bottom: 5px; padding-left: 5px; padding-right: 5px">
                                    <div
                                      class="spacer_block block-1"
                                      style="height: 60px; line-height: 60px; font-size: 1px"
                                    >
                                      &#8202;
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                class="row row-7"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="divider_inner"
                                    style="font-size: 1px; line-height: 1px; border-top: 1px solid #bbb"
                                  >
                                    <span>&#8202;</span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                class="row row-8"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="padding-top: 20px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px"
                                  >
                                    <div
                                      style="
                                        color: #000;
                                        direction: ltr;
                                        font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                        font-size: 15px;
                                        font-weight: 900;
                                        letter-spacing: 0;
                                        line-height: 200%;
                                        text-align: center;
                                        mso-line-height-alt: 30px;
                                      "
                                    >
                                      <p style="margin: 0"><strong>🥇 1등 당첨자 (인원수 / 당첨금)</strong></p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                class="row row-9"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px"
                                  >
                                    <div
                                      style="
                                        color: #000;
                                        direction: ltr;
                                        font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                        font-size: 14px;
                                        font-weight: 400;
                                        letter-spacing: 0;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p style="margin: 0">
                                        <strong
                                          >${convertKRLocaleStringFormat(lottoInfo.firstPrzwnerCo)}명 /
                                          ${convertKRLocaleStringFormat(lottoInfo.firstWinamnt)}원</strong
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                class="row row-10"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="padding-top: 20px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px"
                                  >
                                    <div
                                      style="
                                        color: #000;
                                        direction: ltr;
                                        font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                        font-size: 15px;
                                        font-weight: 900;
                                        letter-spacing: 0;
                                        line-height: 200%;
                                        text-align: center;
                                        mso-line-height-alt: 30px;
                                      "
                                    >
                                      <p style="margin: 0"><strong>🥈 2등 당첨자 (인원수 / 당첨금)</strong></p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                class="row row-11"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px"
                                  >
                                    <div
                                      style="
                                        color: #000;
                                        direction: ltr;
                                        font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                        font-size: 14px;
                                        font-weight: 400;
                                        letter-spacing: 0;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p style="margin: 0">
                                        <strong
                                          >${convertKRLocaleStringFormat(lottoInfo.secondPrzwnerCo)}명 /
                                          ${convertKRLocaleStringFormat(lottoInfo.secondWinamnt)}원</strong
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                class="row row-12"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="padding-top: 20px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px"
                                  >
                                    <div
                                      style="
                                        color: #000;
                                        direction: ltr;
                                        font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                        font-size: 15px;
                                        font-weight: 900;
                                        letter-spacing: 0;
                                        line-height: 200%;
                                        text-align: center;
                                        mso-line-height-alt: 30px;
                                      "
                                    >
                                      <p style="margin: 0"><strong>🥉 3등 당첨자 (인원수 / 당첨금)</strong></p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                class="row row-13"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="padding-top: 5px; padding-bottom: 20px; padding-left: 5px; padding-right: 5px"
                                  >
                                    <div
                                      style="
                                        color: #000;
                                        direction: ltr;
                                        font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                        font-size: 14px;
                                        font-weight: 400;
                                        letter-spacing: 0;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p style="margin: 0">
                                        <strong
                                          >${convertKRLocaleStringFormat(lottoInfo.thirdPrzwnerCo)}명 /
                                          ${convertKRLocaleStringFormat(lottoInfo.thirdWinamnt)}원</strong
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                class="row row-14"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="divider_inner"
                                    style="font-size: 1px; line-height: 1px; border-top: 1px solid #bbb"
                                  >
                                    <span>&#8202;</span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                class="row row-15"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: middle;
                                border-top: 0;
                                border-bottom: 0;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="text-align: center; padding-bottom: 5px; padding-left: 5px; padding-right: 5px"
                                  >
                                    <div
                                      class="spacer_block block-1"
                                      style="height: 60px; line-height: 60px; font-size: 1px"
                                    >
                                      &#8202;
                                    </div>
                                    <p style="margin-bottom: 20px">
                                      <strong>더 많은 정보를 담기 위해 준비중입니다 :)</strong>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                class="row row-16"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                border-bottom: 1px solid #1a7616;
                                border-left: 1px solid #1a7616;
                                border-right: 1px solid #1a7616;
                                padding-bottom: 25px;
                                padding-top: 25px;
                                vertical-align: top;
                                border-top: 0;
                              "
                            >
                              <table
                                class="button_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0"
                              >
                                <tr>
                                  <td class="pad" style="text-align: center">
                                    <div class="alignment" align="center">
                                      <div
                                        style="
                                          text-decoration: none;
                                          display: inline-block;
                                          color: #fff;
                                          background-color: #555;
                                          border-radius: 4px;
                                          width: auto;
                                          border-top: 0 solid transparent;
                                          font-weight: undefined;
                                          border-right: 0 solid transparent;
                                          border-bottom: 0 solid transparent;
                                          border-left: 0 solid transparent;
                                          padding-top: 5px;
                                          padding-bottom: 5px;
                                          font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                          font-size: 16px;
                                          text-align: center;
                                          mso-border-alt: none;
                                          word-break: keep-all;
                                        "
                                      >
                                        <span
                                          style="
                                            cursor: pointer;
                                            padding-left: 20px;
                                            padding-right: 20px;
                                            font-size: 16px;
                                            display: inline-block;
                                            letter-spacing: normal;
                                            word-break: break-word;
                                            line-height: 32px;
                                          "
                                          onclick="location.href='https://dhlottery.co.kr/'"
                                        >
                                          <strong>동행복권 바로가기</strong>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-17"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #1a7616;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 30px;
                                padding-left: 30px;
                                padding-right: 30px;
                                padding-top: 30px;
                                vertical-align: top;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad" style="padding-left: 10px; padding-right: 10px; padding-top: 10px">
                                    <div style="font-family: sans-serif">
                                      <div
                                        class
                                        style="
                                          font-size: 12px;
                                          font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
                                          mso-line-height-alt: 14.399999999999999px;
                                          color: #fff;
                                          line-height: 1.2;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            font-size: 14px;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <span style="font-size: 22px"
                                            ><strong><span style="font-size: 22px">More questions?</span></strong></span
                                          >
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table
                                class="text_block block-2"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 10px;
                                      padding-left: 30px;
                                      padding-right: 30px;
                                      padding-top: 10px;
                                    "
                                  >
                                    <div style="font-family: sans-serif">
                                      <div
                                        class
                                        style="
                                          font-size: 12px;
                                          font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
                                          mso-line-height-alt: 21.6px;
                                          color: #fff;
                                          line-height: 1.8;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            font-size: 14px;
                                            text-align: center;
                                            mso-line-height-alt: 25.2px;
                                          "
                                        >
                                          <span style="font-size: 14px"
                                            >Please email us at
                                            <a
                                              style="text-decoration: underline; color: #fff"
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              >help@enginemailer.com</a
                                            >
                                            or visit our<a
                                              style="text-decoration: underline; color: #fff"
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              FAQs</a
                                            >
                                            . Live chat is available during operating hours so you can talk to a real live
                                            human if you have questions about your account or even need help
                                            meditating</span
                                          >
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-18"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #000;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                padding-top: 40px;
                                vertical-align: top;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="text_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 20px;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 20px;
                                    "
                                  >
                                    <div style="font-family: sans-serif">
                                      <div
                                        class
                                        style="
                                          font-size: 12px;
                                          font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
                                          mso-line-height-alt: 14.399999999999999px;
                                          color: #61626f;
                                          line-height: 1.2;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            font-size: 14px;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <span style="font-size: 12px"
                                            ><strong>Want to change how you receive this email?</strong></span
                                          >
                                        </p>
                                        <p
                                          style="
                                            margin: 0;
                                            font-size: 14px;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <span style="font-size: 12px"
                                            ><a
                                              href="http://[updateprofile]/"
                                              target="_blank"
                                              rel="noopener"
                                              style="color: #61626f"
                                              >manage preference</a
                                            >
                                            &nbsp; &nbsp;·&nbsp; &nbsp;
                                            <a
                                              href="http://[globalunsubscribe]/"
                                              target="_blank"
                                              rel="noopener"
                                              style="color: #61626f"
                                              >unsubscribe</a
                                            ></span
                                          >
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-19"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #f5fff5"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0;
                          mso-table-rspace: 0;
                          background-color: #f5fff5;
                          color: #333;
                          width: 600px;
                          margin: 0 auto;
                        "
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 45px;
                                padding-top: 30px;
                                vertical-align: top;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="social_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0"
                              >
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table
                                        class="social-table"
                                        width="84px"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="mso-table-lspace: 0; mso-table-rspace: 0; display: inline-block"
                                      >
                                        <tr>
                                          <td style="padding: 0 10px 0 0">
                                            <a href="https://github.com/JH8459/LOTTERY" target="_blank"
                                              ><img
                                                src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/0bd8b69e-4024-4f26-9010-6e2a146401fb/github%20%281%29_1.png"
                                                width="32"
                                                height="32"
                                                alt="Github"
                                                title="Github"
                                                style="display: block; height: auto; border: 0"
                                            /></a>
                                          </td>
                                          <td style="padding: 0 10px 0 0">
                                            <a
                                              href="https://www.linkedin.com/in/%EC%A0%95%ED%98%84-%EA%B9%80-8b7a80237/"
                                              target="_blank"
                                              ><img
                                                src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/0db9f180-d222-4b2b-9371-cf9393bf4764/0bd8b69e-4024-4f26-9010-6e2a146401fb/linkedin%201.png"
                                                width="32"
                                                height="32"
                                                alt="LinkedIn"
                                                title="LinkedIn"
                                                style="display: block; height: auto; border: 0"
                                            /></a>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table
                                class="text_block block-2"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                              >
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: sans-serif">
                                      <div
                                        class
                                        style="
                                          font-size: 12px;
                                          font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
                                          mso-line-height-alt: 14.399999999999999px;
                                          color: #61626f;
                                          line-height: 1.2;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            font-size: 14px;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <span style="font-size: 14px"
                                            ><a
                                              style="text-decoration: none; color: #61626f"
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              >Enginemailer</a
                                            >
                                            &nbsp; | &nbsp;
                                            <a
                                              style="text-decoration: none; color: #61626f"
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              >How it works</a
                                            >
                                            &nbsp; &nbsp;| &nbsp;
                                            <a
                                              style="text-decoration: none; color: #61626f"
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              >FAQs</a
                                            >
                                            &nbsp; &nbsp;| &nbsp;
                                            <a
                                              style="text-decoration: none; color: #61626f"
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              >T&Cs</a
                                            ></span
                                          >
                                        </p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End -->
    </body>
  </html>
  `;
};
