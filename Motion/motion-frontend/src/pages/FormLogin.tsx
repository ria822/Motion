import {
  FunctionComponent,
  useState,
  useRef,
  useCallback,
  useEffect,
  FormEventHandler,
} from "react";
import { useNavigate } from "react-router-dom";
import TooltipError from "../components/TooltipError";
import PortalPopup from "../components/PortalPopup";
import TooltipSuccess from "../components/TooltipSuccess";
import styles from "./FormLogin.module.css";
import { testId, testPw } from "../common/RegExp";
import { isLogin, login } from "../common/function";
  
const FormLogin: FunctionComponent = () => {
  const navigate = useNavigate();
  const iconErrorRef = useRef<HTMLDivElement>(null);
  const [isTooltipErrorPopupOpen, setTooltipErrorPopupOpen] = useState(false);
  const iconSuccessRef = useRef<HTMLDivElement>(null);
  const [isTooltipSuccessPopupOpen, setTooltipSuccessPopupOpen] =
    useState(false);

  const onRegisterClick = useCallback(() => {
    navigate("/form-register");
  }, [navigate]);

  const onFindIDClick = useCallback(() => {
    navigate("/form-findid");
  }, [navigate]);

  const openTooltipErrorPopup = useCallback(() => {
    setTooltipErrorPopupOpen(true);
  }, []);

  const closeTooltipErrorPopup = useCallback(() => {
    setTooltipErrorPopupOpen(false);
  }, []);

  const openTooltipSuccessPopup = useCallback(() => {
    setTooltipSuccessPopupOpen(true);
  }, []);

  const closeTooltipSuccessPopup = useCallback(() => {
    setTooltipSuccessPopupOpen(false);
  }, []);

  const onTextButtonCorverContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const [tooltipErrorMessage, setTooltipErrorMessage] = useState("");
  const [tooltipSuccessMessage, setTooltipSuccessMessage] = useState("");

  const appendTooltip = (input:HTMLInputElement, tooltip: "error" | "success") => {
    const tooltipError = document.getElementById("tooltip_error") as HTMLDivElement;
    const tooltipSuccess = document.getElementById("tooltip_success") as HTMLDivElement;
    const description = input.parentElement?.parentElement?.firstChild as HTMLDivElement;
    closeTooltipErrorPopup();
    closeTooltipSuccessPopup();
    if(tooltip == "success") {
      description.appendChild(tooltipSuccess);
      tooltipSuccess.setAttribute("style", "display:inline-block");
      tooltipError.setAttribute("style", "display:none");
    }
    else if(tooltip == "error") {
      description.appendChild(tooltipError);
      tooltipError.setAttribute("style", "display:inline-block");
      tooltipSuccess.setAttribute("style", "display:none");
      openTooltipErrorPopup();
    }
  }

  const onFormSubmit: FormEventHandler = async(e) => {
    e.preventDefault();

    const inputUserID = document.getElementById("userID") as HTMLInputElement;
    const userID = inputUserID.value;
    const inputUserPW = document.getElementById("userPW") as HTMLInputElement;
    const userPW = inputUserPW.value;

    if(!testId(userID)) {
      setTooltipErrorMessage("5~20?????? ?????? ?????????, ????????? ???????????????.");
      appendTooltip(inputUserID, "error");
    }
    else if(!testPw(userPW)) {
      setTooltipErrorMessage("5~30?????? ??????, ??????, ????????????(*~`!^-_+<>@#$%&)??? ???????????????.");
      appendTooltip(inputUserPW, "error");
    }
    else {
      if(await login(userID, userPW)) {
        navigate("/table-audition");
      }
      else {
        setTooltipErrorMessage("????????? ?????? ??????????????? ?????? ??????????????????.");
        appendTooltip(inputUserID, "error");
      }
    }
  }

  async function checkState() {
    if(await isLogin()) {
      navigate("/table-audition");
    }
  }

  useEffect(() => {
    checkState();

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
      <div className={styles.formLogin}>
        <div className={styles.right}>
          <div className={styles.title}>
            <b className={styles.title1} data-animate-on-scroll>
              ?????????
            </b>
            <div className={styles.subtitle1}>
              <div className={styles.textFormHelp}>
                <b className={styles.text} data-animate-on-scroll>
                  ???????????? ????????????????
                </b>
              </div>
              <div className={styles.textbuttonFormHelp}>
                <b
                  className={styles.register}
                  onClick={onRegisterClick}
                  data-animate-on-scroll
                >
                  ????????????
                </b>
              </div>
            </div>
            <div className={styles.subtitle2}>
              <div className={styles.textFormHelp}>
                <b
                  className={styles.register}
                  onClick={onFindIDClick}
                  data-animate-on-scroll
                >
                  ?????????/????????????
                </b>
              </div>
              <div className={styles.textFormHelp1}>
                <b className={styles.text} data-animate-on-scroll>
                  ??? ????????????????
                </b>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={onFormSubmit}>
            <div className={styles.row}>
              <div className={styles.inputUserid}>
                <div className={styles.description}>
                  <label
                    className={styles.label}
                    htmlFor="userID"
                    data-animate-on-scroll
                  >
                    ?????????
                  </label>
                </div>
                <div className={styles.board}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="5~20?????? ?????? ?????????, ??????"
                    maxLength={20}
                    id="userID"
                    tabIndex={1}
                    name="userID"
                    data-animate-on-scroll
                  />
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.inputUserpw}>
                <div className={styles.description}>
                  <label
                    className={styles.label}
                    htmlFor="userPW"
                    data-animate-on-scroll
                  >
                    ????????????
                  </label>
                </div>
                <div className={styles.board1}>
                  <input
                    className={styles.input}
                    type="password"
                    placeholder="5~30?????? ?????? ?????????, ??????, ????????????"
                    maxLength={30}
                    id="userPW"
                    tabIndex={2}
                    name="userPW"
                    data-animate-on-scroll
                  />
                </div>
              </div>
            </div>
            <button className={styles.buttonLogin}>
              <b className={styles.text2}>?????????</b>
            </button>
          </form>
          <div
            className={styles.iconError}
            id="tooltip_error"
            onMouseEnter={openTooltipErrorPopup}
            ref={iconErrorRef}
            onClick={openTooltipErrorPopup}
          >
            <img
              className={styles.iconError1}
              alt=""
              src="../icon-error1.svg"
            />
          </div>
          <div
            className={styles.iconError}
            id="tooltip_success"
            onMouseEnter={openTooltipSuccessPopup}
            ref={iconSuccessRef}
            onClick={openTooltipSuccessPopup}
          >
            <img
              className={styles.iconError1}
              alt=""
              src="../icon-success1.svg"
            />
          </div>
        </div>
        <img
          className={styles.loginFormImage1Icon}
          alt=""
          src="../login-form-image-1@2x.png"
        />
        <div
          className={styles.textbuttonCorver}
          onClick={onTextButtonCorverContainerClick}
        >
          <b className={styles.cover}>
            <p className={styles.p}>
              <span className={styles.span}>???</span>
              <span>?????? ??????</span>
              <span className={styles.span}>???</span>
              <span>,</span>
            </p>
            <p className={styles.p1}>
              <span>??????</span>
            </p>
          </b>
        </div>
      </div>
      {isTooltipErrorPopupOpen && (
        <PortalPopup
          placement="Top left"
          top={2}
          left={-10}
          relativeLayerRef={iconErrorRef}
          onOutsideClick={closeTooltipErrorPopup}
        >
          <TooltipError onClose={closeTooltipErrorPopup} message={tooltipErrorMessage}/>
        </PortalPopup>
      )}
      {isTooltipSuccessPopupOpen && (
        <PortalPopup
          placement="Top left"
          top={2}
          left={-10}
          relativeLayerRef={iconSuccessRef}
          onOutsideClick={closeTooltipSuccessPopup}
        >
          <TooltipSuccess onClose={closeTooltipSuccessPopup} message={tooltipSuccessMessage}/>
        </PortalPopup>
      )}
    </>
  );
};
  
export default FormLogin;
  