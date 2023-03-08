import { DialogTypeMap } from '@suid/material/Dialog/DialogProps';
import './GettingStarted.scss';
import { TextField } from '@suid/material';
import { CommonButton } from '../../components/common';
import { createSignal } from 'solid-js';

interface LoginDialogProps {
  inRequesting?: boolean;
  onSubmit?: (valid: boolean) => void;
}

type Props = LoginDialogProps & DialogTypeMap['selfProps'];

export const GettingStarted = () => {
  let inputRef: HTMLDivElement;
  const [required, setRequired] = createSignal(false);
  const [email, setEmail] = createSignal('');
  const onStarted = () => {
    if (!email().length) {
      setRequired(!email().length);
      (inputRef.children[1].children[0] as HTMLInputElement).focus();
    } else {
      setRequired(false);
    }
  };

  return (
    <div class="started-box">
      <h1 class="lead-title">Unlimited movies, TV shows, and more.</h1>
      <h3 class="md-title">Xem bất cứ đâu, hủy bất cứ khi nào.</h3>
      <h3 class="sub-title">
        Sẵn sàng để trở thành một thành viên bằng cách điền vào mail bên dưới.
      </h3>
      <div class="d-flex mt-5 position-relative set-text-white">
        <TextField
          ref={inputRef}
          value={email()}
          onChange={(e) => setEmail(e.target.value)}
          class="gt-input"
          id="started-with-mail"
          label="Địa chỉ Email"
          variant="filled"
          fullWidth
        />
        {required() ? (
          <div class="input-error">Để bắt đầu, bạn vui lòng điền email</div>
        ) : null}
        <CommonButton onClick={onStarted} sx={{ width: '220px' }}>
          <span class="gt-button">Bắt đầu nào!</span>
        </CommonButton>
      </div>
    </div>
  );
};
