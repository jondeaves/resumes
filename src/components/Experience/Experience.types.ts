import ExperienceItem from '../../common/types/ExperienceItem';
import { FelaWithStylesType } from '../../common/types/FelaStyles';

export interface ExperienceProps {
  item: ExperienceItem;
}

export interface ExperienceStyles {
  main: FelaWithStylesType<Record<string, unknown>>;
  title: FelaWithStylesType<Record<string, unknown>>;
  subTitle: FelaWithStylesType<Record<string, unknown>>;
}
