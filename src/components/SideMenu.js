// import styles from style modules
import styles from '../styles/sidemenu.module.css';

// import modules to render tree view 
import TreeView from 'react-treeview';
import "react-treeview/react-treeview.css";

// import outlet to change dom without reloading tab
import { Outlet } from "react-router-dom";

export default function SideMenu({ files }) {

  const renderTreeNodes = (nodes) => {
    return nodes.map((node, i) => {
      return (
        node.children ? <TreeView key={i} nodeLabel={node.name} defaultCollapsed={false}>
          {renderTreeNodes(node.children)}
        </TreeView> : <div className="ms-3" key={i}>{node.name}</div>
      );
    });
  };

  return (
    <>
      <div className="d-flex h-100">
        <div className={`col-md-3 d-none d-md-block ${styles.sideMenuContainer}`}>
          {renderTreeNodes([files])}
        </div>
        <Outlet />
      </div>
    </>
  );
}