import './Preview.scss';
import { Button, Icon } from '@suid/material';

const IMG_SRC =
  'http://occ-0-395-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTcWjaXNse6hoE60hiANeJBzcS-Ax9kOC8C5ufDgul6f-7snutlPqAXvlbOa_VFoHILrRtsdz9P5iLUqAvbbC9qaih1j1aVWe8Nk.webp?r=762';
const NAME_SRC =
  'http://occ-0-395-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcu4-FI6X8gWTNjLi_Ar5Uk99J-kOPHxkWkut93nLu0fUYXNm7AbOXrXnSKM2ynlusv7KbPV3mU0TSr2Cs63uaZzGVt4M3XmyFqYfjFRGESl.webp?r=bf8';

export const Preview = () => {
  return (
    <div class="preview">
      <img class="av-thumb" src={IMG_SRC} alt="" />
      <div class="info">
        <img class="name-as-pic" src={NAME_SRC} alt="" />
        <div class="description">
          After getting bitten by a genetically enhanced spider, shy teen Peter
          Parker uses his newfound superpowers to fight injustice and battle a
          vengeful supervillain.
        </div>
        <div class="d-flex mt-3">
          <Button class="p-button">
            {' '}
            <span class="r-triangle me-2"></span> Xem
          </Button>
          <Button class="p-button">Chi tiết</Button>
        </div>
      </div>
    </div>
  );
};
