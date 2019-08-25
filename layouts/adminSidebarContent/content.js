import { default as AdminPage } from 'layouts/adminContent/content';

import { TabList, Tab } from 'components/tab';

const Content = ({ children, sidebar, padding, customStyle }) => (
  <>
    <AdminPage padding={padding}>
      <div className="sidebar">
        <TabList customStyle={customStyle}>
          {sidebar.map(item => (
            <Tab
              key={item.name}
              text={item.name}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </TabList>
        <div className="children">{children}</div>
      </div>
    </AdminPage>

    <style jsx>
      {`
        .sidebar {
          display: flex;
        }

        .children {
          width: 100%;
        }
      `}
    </style>
  </>
);

export default Content;
