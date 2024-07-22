import TreeView from './components/treeView';
import { TreeNode } from './types/tree.interface';

const data: TreeNode[] = [
  {
    name: 'Элемент 1',
    children: [
      {
        name: 'Элемент 1.1',
        children: [
          {
            name: 'Элемент 1.1.1'
          },
          {
            name: 'Элемент 1.1.2'
          }
        ]
      },
      {
        name: 'Элемент 1.2'
      }
    ]
  },
  {
    name: 'Элемент 2'
  }
];

const App: React.FC = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <TreeView nodes={data} />
        </div>
      </main>
    </>
  );
};

export default App;
