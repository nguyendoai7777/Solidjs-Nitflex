import { CommonButton } from '../../components/common';
import { FormControl, InputLabel, MenuItem, Select } from '@suid/material';
import { LangSelectProps } from '../../common/models/ui.model';
import { createSignal, For } from 'solid-js';
import './NLNavbar.scss';
import { SelectChangeEvent } from '@suid/material/Select';
import { CommonSelectStyle } from '../../components/common/Select';

export interface NLNavbarProps {
  selectedLang: string;
  langList: LangSelectProps[];
  onSelectChanged?: (selectedLang: LangSelectProps) => void;
  onLoginClicked?: () => void;
}

export const NLNavbar = ({
  langList,
  selectedLang,
  onSelectChanged,
  onLoginClicked,
}: NLNavbarProps) => {
  const [lang, setLang] = createSignal(selectedLang);
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setLang(value);
    const selected = langList.find((e) => e.value === value);
    onSelectChanged(selected);
  };
  return (
    <div class="nl-navbar d-flex justify-content-end">
      <FormControl sx={CommonSelectStyle} size="small">
        <InputLabel id="lang-selector">Ngôn ngữ</InputLabel>
        <Select
          labelId="lang-selector"
          value={lang()}
          label="Ngôn ngữ"
          onChange={handleChange}
        >
          <For each={langList}>
            {(it) => <MenuItem value={it.value}>{it.label}</MenuItem>}
          </For>
        </Select>
      </FormControl>
      <CommonButton onClick={onLoginClicked} class="ms-3" variant="contained">
        Đăng nhập
      </CommonButton>
    </div>
  );
};
