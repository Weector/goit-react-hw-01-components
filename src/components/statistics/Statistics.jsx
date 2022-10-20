import PropTypes from 'prop-types';
import { GenerateColor } from './RandomColor';
import {
  Section,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistic.style';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} color={GenerateColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  //змінити stats тип пропа
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
