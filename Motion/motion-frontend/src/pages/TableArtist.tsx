import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PopupSendSMS from "../components/PopupSendSMS";
import PortalPopup from "../components/PortalPopup";
import PopupUploadProfilePhoto from "../components/PopupUploadProfilePhoto";
import styles from "./TableArtist.module.css";

const TableArtist: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isPopupSendSMSOpen, setPopupSendSMSOpen] = useState(false);
  const [isPopupUploadProfilePhotoOpen, setPopupUploadProfilePhotoOpen] =
    useState(false);
  const [isPopupUploadProfilePhoto1Open, setPopupUploadProfilePhoto1Open] =
    useState(false);

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openPopupSendSMS = useCallback(() => {
    setPopupSendSMSOpen(true);
  }, []);

  const closePopupSendSMS = useCallback(() => {
    setPopupSendSMSOpen(false);
  }, []);

  const openPopupUploadProfilePhoto = useCallback(() => {
    setPopupUploadProfilePhotoOpen(true);
  }, []);

  const closePopupUploadProfilePhoto = useCallback(() => {
    setPopupUploadProfilePhotoOpen(false);
  }, []);

  const openPopupUploadProfilePhoto1 = useCallback(() => {
    setPopupUploadProfilePhoto1Open(true);
  }, []);

  const closePopupUploadProfilePhoto1 = useCallback(() => {
    setPopupUploadProfilePhoto1Open(false);
  }, []);
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.tableArtist} data-animate-on-scroll>
        <div className={styles.contents}>
          <div className={styles.navigation}>
            <div className={styles.title}>
              <button className={styles.button} onClick={onButtonClick}>
                <p className={styles.p}>
                  <span className={styles.span}>???</span>
                  <span className={styles.span1}>?????? ??????</span>
                  <span className={styles.span}>???</span>
                  <span className={styles.span1}>,</span>
                </p>
                <p className={styles.p1}>
                  <span className={styles.span1}>??????</span>
                </p>
              </button>
            </div>
            <div className={styles.tabs}>
              <div className={styles.line} />
              <div className={styles.buttons}>
                <div className={styles.tabButton}>
                  <div className={styles.contents1}>
                    <div className={styles.label}>??????</div>
                  </div>
                  <div className={styles.line1} />
                </div>
                <div className={styles.tabButton}>
                  <div className={styles.contents1}>
                    <div className={styles.label}>??????</div>
                  </div>
                </div>
                <div className={styles.tabButton}>
                  <div className={styles.contents1}>
                    <div className={styles.label}>?????????</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.space}>
            <div className={styles.options}>
              <button className={styles.actionButton}>
                <img className={styles.icon} alt="" src="../icon.svg" />
                <div className={styles.label3}>??????</div>
              </button>
              <div className={styles.search}>
                <div className={styles.contents4}>
                  <img className={styles.icon1} alt="" src="../icon1.svg" />
                  <input
                    className={styles.fieldText}
                    type="text"
                    placeholder="Search"
                    maxLength={50}
                  />
                </div>
                <div className={styles.line2} />
              </div>
              <button
                className={styles.sendSmsButton}
                onClick={openPopupSendSMS}
              >
                <div className={styles.div}>??????/????????? ????????? ??????</div>
              </button>
              <button className={styles.sendSmsButton}>
                <div className={styles.div}>?????? ????????? ???????????? (.xlsx)</div>
              </button>
            </div>
            <div className={styles.table}>
              <div className={styles.headers}>
                <div className={styles.column}>
                  <div className={styles.sort}>
                    <img className={styles.icon} alt="" src="../icon2.svg" />
                    <div className={styles.select}>
                      <div className={styles.captionText}>?????????</div>
                      <img className={styles.icon} alt="" src="../icon3.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.column1}>
                  <div className={styles.select1}>
                    <div className={styles.captionText}>??????</div>
                    <img className={styles.icon} alt="" src="../icon3.svg" />
                  </div>
                </div>
                <div className={styles.column2}>
                  <div className={styles.select1}>
                    <div className={styles.captionText}>?????????</div>
                    <img className={styles.icon} alt="" src="../icon3.svg" />
                  </div>
                </div>
                <div className={styles.column3}>
                  <div className={styles.select1}>
                    <div className={styles.captionText}>??????</div>
                    <img className={styles.icon} alt="" src="../icon3.svg" />
                  </div>
                </div>
                <div className={styles.column4}>
                  <div className={styles.select1}>
                    <div className={styles.captionText}>??????</div>
                    <img className={styles.icon} alt="" src="../icon3.svg" />
                  </div>
                </div>
                <div className={styles.column4}>
                  <div className={styles.select1}>
                    <div className={styles.captionText}>??????</div>
                    <img className={styles.icon} alt="" src="../icon3.svg" />
                  </div>
                </div>
                <div className={styles.column6} />
              </div>
              <div className={styles.rows}>
                <div className={styles.row}>
                  <div className={styles.column7}>
                    <div className={styles.bodyText}>22/12/15</div>
                  </div>
                  <div className={styles.column8}>
                    <div className={styles.bodyText1}>?????????</div>
                  </div>
                  <div className={styles.column9}>
                    <div
                      className={styles.bodyText2}
                      onClick={openPopupUploadProfilePhoto}
                    >
                      ?????? ????????? ??????????????? ?????? 5~8??? ?????? ?????? ?????????
                      ????????????!! (??????)
                    </div>
                  </div>
                  <div className={styles.column10}>
                    <div className={styles.bodyText1}>6???</div>
                  </div>
                  <div className={styles.column11}>
                    <div className={styles.bodyText1}>115cm</div>
                  </div>
                  <div className={styles.column11}>
                    <div className={styles.bodyText1}>20kg</div>
                  </div>
                  <div className={styles.column13}>
                    <img
                      className={styles.iconButton}
                      alt=""
                      src="../icon-button.svg"
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.column7}>
                    <div className={styles.bodyText}>22/12/16</div>
                  </div>
                  <div className={styles.column8}>
                    <div className={styles.bodyText1}>?????????</div>
                  </div>
                  <div className={styles.column9}>
                    <div
                      className={styles.bodyText2}
                      onClick={openPopupUploadProfilePhoto1}
                    >
                      ????????? ???????????? ???????????? ????????? ???????????? (??????1~??????3)
                    </div>
                  </div>
                  <div className={styles.column10}>
                    <div className={styles.bodyText1}>23???</div>
                  </div>
                  <div className={styles.column11}>
                    <div className={styles.bodyText1}>175cm</div>
                  </div>
                  <div className={styles.column11}>
                    <div className={styles.bodyText1}>68kg</div>
                  </div>
                  <div className={styles.column13}>
                    <img
                      className={styles.iconButton}
                      alt=""
                      src="../icon-button.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.pagination}>
                <div className={styles.field}>
                  <div className={styles.select6}>
                    <div className={styles.subhead}>10???</div>
                    <img className={styles.icon} alt="" src="../icon8.svg" />
                  </div>
                </div>
                <div className={styles.buttons1}>
                  <div className={styles.link}>
                    <div className={styles.subhead}>1</div>
                  </div>
                  <div className={styles.link1}>
                    <div className={styles.subhead}>2</div>
                  </div>
                  <div className={styles.link1}>
                    <div className={styles.subhead}>3</div>
                  </div>
                  <div className={styles.link1}>
                    <div className={styles.subhead}>4</div>
                  </div>
                  <div className={styles.link1}>
                    <div className={styles.subhead}>5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopupSendSMSOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupSendSMS}
        >
          <PopupSendSMS onClose={closePopupSendSMS} />
        </PortalPopup>
      )}
      {isPopupUploadProfilePhotoOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupUploadProfilePhoto}
        >
          <PopupUploadProfilePhoto onClose={closePopupUploadProfilePhoto} />
        </PortalPopup>
      )}
      {isPopupUploadProfilePhoto1Open && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupUploadProfilePhoto1}
        >
          <PopupUploadProfilePhoto onClose={closePopupUploadProfilePhoto1} />
        </PortalPopup>
      )}
    </>
  );
};

export default TableArtist;
