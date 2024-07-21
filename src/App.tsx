import { useState } from 'react';

import SvgIcon from './components/svgIcon';
import clsx from 'clsx';

function App() {
  const [isShowAccon, setIsShowAccon] = useState([
    {
      item: 0,
      active: false
    },
    {
      item: 1,
      active: false
    }
  ]);
  const [isShowAcconNested, setIsShowAcconNested] = useState([
    {
      item: 0,
      active: false
    },
    {
      item: 1,
      active: false
    }
  ]);

  const toggleAcconItem = (index: number) => {
    setIsShowAccon(prevState =>
      prevState.map(item => (item.item === index ? { ...item, active: !item.active } : item))
    );
  };

  const toggleAcconNestedItem = (index: number) => {
    console.log('test');

    setIsShowAcconNested(prevState =>
      prevState.map(item => (item.item === index ? { ...item, active: !item.active } : item))
    );
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__content">
            <ul className="tabs">
              <li className="tabs__item">
                <button className="tabs__btn" type="button">
                  Кнопка 1
                </button>
              </li>
              <li className="tabs__item">
                <button className="tabs__btn" type="button">
                  Кнопка 2
                </button>
              </li>
              <li className="tabs__item">
                <button className="tabs__btn" type="button">
                  Кнопка 3
                </button>
              </li>
              <li className="tabs__item">
                <button className="tabs__btn" type="button">
                  Кнопка 4
                </button>
              </li>
            </ul>

            <ul className="accordion">
              <li
                className={clsx('accordion__item', {
                  _active: isShowAccon[0].active
                })}
              >
                <button
                  className="accordion__control"
                  type="button"
                  aria-expanded="false"
                  onClick={() => toggleAcconItem(0)}
                >
                  Аккордеон 1
                  <SvgIcon className="accordion__icon" name="arrow" size="20" aria-hidden="true" />
                </button>
                <div className="accordion__inner" aria-hidden="true">
                  <div className="accordion__content">
                    <ul className="accordion accordion--nested">
                      <li
                        className={clsx('accordion__item', {
                          _active: isShowAcconNested[0].active
                        })}
                      >
                        <button
                          className="accordion__control"
                          type="button"
                          aria-expanded="false"
                          onClick={() => toggleAcconNestedItem(0)}
                        >
                          Аккордеон 1.1
                          <SvgIcon className="accordion__icon" name="arrow" size="20" aria-hidden="true" />
                        </button>
                        <div className="accordion__inner" aria-hidden="true">
                          <div className="accordion__content">
                            <p>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum distinctio nobis accusamus
                              soluta, ratione autem eveniet fugit inventore recusandae sapiente odit incidunt dolor
                              provident cumque sint natus eius necessitatibus! Dolor!
                            </p>
                          </div>
                        </div>
                      </li>
                      <li
                        className={clsx('accordion__item', {
                          _active: isShowAcconNested[1].active
                        })}
                      >
                        <button
                          className="accordion__control"
                          type="button"
                          aria-expanded="false"
                          onClick={() => toggleAcconNestedItem(1)}
                        >
                          Аккордеон 1.1
                          <SvgIcon className="accordion__icon" name="arrow" size="20" aria-hidden="true" />
                        </button>
                        <div className="accordion__inner" aria-hidden="true">
                          <div className="accordion__content">
                            <p>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum distinctio nobis accusamus
                              soluta, ratione autem eveniet fugit inventore recusandae sapiente odit incidunt dolor
                              provident cumque sint natus eius necessitatibus! Dolor!
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li
                className={clsx('accordion__item', {
                  _active: isShowAccon[1].active
                })}
              >
                <button
                  className="accordion__control"
                  type="button"
                  aria-expanded="false"
                  onClick={() => toggleAcconItem(1)}
                >
                  Аккордеон 2
                  <SvgIcon className="accordion__icon" name="arrow" size="20" aria-hidden="true" />
                </button>
                <div className="accordion__inner" aria-hidden="true">
                  <div className="accordion__content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ut nisi consequatur id
                      labore, enim soluta eaque dolorum velit recusandae, quis veritatis voluptatem modi nobis!
                      Blanditiis eum placeat vitae maiores!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
