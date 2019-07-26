import Icon from '../../icon';
import { Text } from '../../typography';

const Tab = ({ text, icon, selected = false }) => (
  <>
    <li role="tab" aria-selected={selected}>
      {icon && <Icon name={icon} size={20} />}
      <Text text={text} margin={icon && '0 0 0 10px'} fontWeight={500} />
    </li>

    <style jsx>
      {`
        li {
          background-color: white;
          border-radius: 8px;
          text-align: left;
          padding: 10px 6px;
          margin: 6px 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        li:hover {
          background-color: gray;
          color: white;
        }

        li:hover > :global(svg) {
          stroke: white;
        }
      `}
    </style>
  </>
);

export default Tab;
