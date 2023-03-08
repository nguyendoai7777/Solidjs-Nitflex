import { NLNavbar } from './NLNavbar';
import './NoneLogin.scss';
import { LangSelectProps } from '../../common/models/ui.model';
import { createSignal, JSXElement, Show } from 'solid-js';
import { TransitionProps } from '@suid/material/transitions';
import {
  ButtonBase,
  Checkbox,
  Dialog,
  FormControl,
  FormControlLabel,
  Slide,
  TextField,
} from '@suid/material';
import { CommonButton } from '../../components/common';
import { GettingStarted } from './GettingStarted';
import { useNavigate } from '@solidjs/router';

const bgImgSrc =
  'https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/4af43f9f-8764-494f-a075-ba5c79c893f3/VN-en-20230227-popsignuptwoweeks-perspective_alpha_website_small.jpg';

const Transition = function Transition(
  props: TransitionProps & {
    children: JSXElement;
  }
) {
  return <Slide direction="down" {...props} />;
};

const TextFieldStyle = {
  backgroundColor: '#333333',
  borderRadius: '6px',
};

const lang: LangSelectProps[] = [
  { value: 'en-us', id: '+1', label: 'English' },
  { value: 'vn-vi', id: '+84', label: 'Tiếng Việt' },
];

export const NoneLoginScreen = () => {
  const nav = useNavigate();

  const [loginDialog, setLoginDialog] = createSignal(true);
  const [mail, setMail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [required, setRequired] = createSignal(false);
  const [wrongInfo, setWrongInfo] = createSignal(false);

  const handleLoginClicked = () => setLoginDialog(true);
  const closeLoginDialog = () => setLoginDialog(false);
  const handleLogin = (e) => {
    e.preventDefault();
    if (mail().length > 0 && password().length > 0) {
      if (mail() === 'm@' && password() === '03012003') {
        nav('/');
        localStorage.setItem('isLogin', String(Date.now()));
        setWrongInfo(false);
      } else {
        setWrongInfo(true);
      }
      setRequired(false);
    } else {
      //invalid
      setRequired(true);
    }
  };
  return (
    <>
      <div class="nl-box">
        <NLNavbar
          langList={lang}
          selectedLang={lang[1].value}
          onSelectChanged={(e) => console.log(`current lang: `, e)}
          onLoginClicked={handleLoginClicked}
        />
        <Show when={!loginDialog()} keyed>
          <GettingStarted />
        </Show>
        <img
          class="bgi"
          src={bgImgSrc}
          alt="Background Image"
          role="none"
          aria-label="Background Image"
          title="Background Image"
        />
      </div>
      {/*<LoginDialog uiProps={{open: loginDialog(), onClose: closeLoginDialog}} />*/}
      <h1>None Login</h1>

      <Dialog
        open={loginDialog()}
        onClose={closeLoginDialog}
        TransitionComponent={Transition}
        class="root-dialog"
      >
        <div class="box">
          <form onSubmit={handleLogin}>
            <div class="header">Đăng nhập</div>

            <div class="submit-box position-relative">
              <FormControl
                fullWidth
                class="mt-4 set-text-white"
                sx={TextFieldStyle}
              >
                <TextField
                  id="account"
                  label="Email hoặc SĐT"
                  variant="filled"
                  onChange={(e) => setMail(e.target.value)}
                />
              </FormControl>
              <br />
              <FormControl
                fullWidth
                class="mt-4 set-text-white"
                sx={TextFieldStyle}
              >
                <TextField
                  id="password"
                  label="Mật khẩu"
                  variant="filled"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <br />
              <Show when={required()} keyed>
                <div class="input-error">
                  Vui lòng điền đầy đủ email và mật khẩu
                </div>
              </Show>
              <Show when={wrongInfo()} keyed>
                <div class="input-error">
                  Vui lòng kiểm tra lại email và mật khẩu
                </div>
              </Show>
            </div>
            <CommonButton class="mt-5 set-text-white" type="submit" fullWidth>
              Đăng nhập
            </CommonButton>
            <div class="mt-3 d-flex justify-content-between align-items-center">
              <FormControlLabel
                class="common-checkbox"
                control={<Checkbox defaultChecked />}
                label="Ghi nhớ đăng nhập"
              />
              <a href="">Tìm trợ giúp?</a>
            </div>

            <div class="d-flex mt-3">
              <p>Bạn mới tham gia? </p>
              <ButtonBase class="ms-3 fit-height" onClick={closeLoginDialog}>
                Đăng ký ngay
              </ButtonBase>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
};
