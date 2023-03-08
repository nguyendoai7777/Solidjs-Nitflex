interface Props {
  w?: string;
  h?: string;
  fill?: string;
}

export const Logo = ({ w, h, fill = 'deeppink' }: Props) => {
  return (
    <svg
      style={{
        width: w,
        height: h,
        fill,
      }}
    >
      <use href="#Logo" />
    </svg>
  );
};
