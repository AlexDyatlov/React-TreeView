import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { toggleNode } from '../store/treeSlice';
import { getNestedNodes } from '../store/selectors';

import { TreeNode } from '../types/tree.interface';

import SvgIcon from './svgIcon';

interface TreeViewProps {
  nodes: TreeNode[];
  className?: string;
}

function TreeView({ nodes, className }: TreeViewProps) {
  const dispatch = useDispatch();
  const expandedItems = useSelector(getNestedNodes());

  return (
    <ul className={clsx('accordion', className)}>
      {nodes.map((item, index) => {
        const isExpanded = expandedItems.includes(item.name);
        const hasChildren = item.children && item.children.length > 0;

        return (
          <li
            className={clsx('accordion__item', {
              _active: isExpanded,
              _disabled: !hasChildren
            })}
            key={index}
          >
            <button
              className="accordion__control"
              type="button"
              aria-expanded={isExpanded}
              onClick={() => dispatch(toggleNode(item.name))}
              disabled={!hasChildren}
            >
              {item.name}
              {hasChildren && <SvgIcon className="accordion__icon" name="arrow" size="20" aria-hidden="true" />}
            </button>

            {hasChildren && item.children && (
              <div className="accordion__inner" aria-hidden={!isExpanded}>
                <div className="accordion__content">
                  <TreeView className="accordion--nested" nodes={item.children} key={index} />
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default TreeView;
