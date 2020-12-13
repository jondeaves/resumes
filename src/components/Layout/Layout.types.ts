import { FelaWithStylesType } from '../../common/types/FelaStyles';

export interface LayoutStyles {
  wrapper: FelaWithStylesType<Record<string, unknown>>;
  main: FelaWithStylesType<Record<string, unknown>>;
  aside: FelaWithStylesType<Record<string, unknown>>;
}
