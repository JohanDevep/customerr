import React from "react";
import diary_img from "../../../public/assets/images/diary/diary-1.png";
import detail_banner_1 from "../../../public/assets/images/diary/detail-banner-1.png";
import detail_banner_2 from "../../../public/assets/images/diary/detail-banner-2.png";
import detail_banner_3 from "../../../public/assets/images/diary/detail-banner-3.png";

const blog_detail = () => {
  return (
    <main>
      {/* <!--Blog Detail Page Banner Start--> */}
      <div className="diary-item">
        <div className="diary-item-wrapper lg">
          <div className="diary-item-banner">
            <img
              src={diary_img}
              alt="Event Thumbnail"
              width="1367"
              height="932"
            />
          </div>
          <div className="diary-item-content-wrapper container">
            <div className="diary-item-content">
              <ul className="list-badges">
                <li>
                  <span className="badge-dark badge-lg">Beauty</span>
                </li>
                <li>
                  <span className="badge-dark badge-lg">Hair Care</span>
                </li>
              </ul>
              <h3 className="diary-item-title lg">Lorem ipsum dolor sit</h3>
              <div className="diary-item-text-content lg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nec erat ut lacus bibendum sollicitudin vitae a
                  mauris. Curabitur luctus mauris ac sapien pulvinar lobortis.
                  Proin a luctus tellus, sit amet tincidunt lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Blog Detail Page Banner End--> */}
      {/* <!--Diary Section Start--> */}
      <section className="diary-detail-section section-content-bordered-bg">
        <h2 className="visually-hidden">Single Blog Detail</h2>
        <div className="container">
          <div className="section-content-bordered diary-detail-wrapper">
            <div className="diary-detail-grid">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vestibulum convallis dui ut dictum. Nunc a semper est, ut tempor
                ante. Sed nulla odio, elementum vel finibus ut, congue eget est.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Mauris condimentum leo non
                vestibulum lacinia. Donec massa purus, congue eu est ac, aliquet
                venenatis elit. Donec tincidunt arcu libero, ac dapibus quam
                sollicitudin at. Nunc venenatis nunc tempus nisi auctor, at
                interdum dolor sollicitudin. Sed rhoncus imperdiet diam nec
                pulvinar. Sed consectetur tempus dolor eget ultrices.
                Suspendisse potenti. Suspendisse aliquam condimentum lectus,
                vitae molestie dolor euismod ac. Maecenas imperdiet turpis nunc,
                id blandit ipsum malesuada maximus. Donec imperdiet nibh at
                neque vestibulum, in lacinia arcu pellentesque. Curabitur et
                felis feugiat, viverra lacus nec, pellentesque tellus. Quisque
                tristique gravida sapien sed finibus.
              </p>
              <p>
                Aenean tristique gravida egestas. Aenean auctor varius sem. In
                mollis purus quis purus laoreet, eget aliquam tellus tincidunt.
                Nullam non eros et tellus tempus maximus eget id leo. Proin
                consequat felis ipsum, a consequat nulla pretium non. Sed in
                hendrerit nulla. Donec condimentum dui sit amet nisl auctor, non
                elementum augue tincidunt. In vitae purus mollis, rhoncus odio
                in, pulvinar magna. Nullam feugiat gravida augue, non bibendum
                nulla luctus quis. Maecenas quis ligula ac ex ullamcorper
                fringilla. Ut sagittis risus et felis consectetur congue.
                Vivamus at risus nulla. Integer sodales tempus libero lacinia
                posuere. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Nam interdum aliquam pellentesque.
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="diary-detail-banner">
                    <img
                      src={detail_banner_1}
                      alt="Diary Detail Banner"
                      width="100%"
                      height="530"
                    />
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vestibulum convallis dui ut dictum. Nunc a semper est, ut tempor
                ante. Sed nulla odio, elementum vel finibus ut, congue eget est.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Mauris condimentum leo non
                vestibulum lacinia. Donec massa purus, congue eu est ac, aliquet
                venenatis elit. Donec tincidunt arcu libero, ac dapibus quam
                sollicitudin at. Nunc venenatis nunc tempus nisi auctor, at
                interdum dolor sollicitudin. Sed rhoncus imperdiet diam nec
                pulvinar. Sed consectetur tempus dolor eget ultrices.
                Suspendisse potenti. Suspendisse aliquam condimentum lectus,
                vitae molestie dolor euismod ac. Maecenas imperdiet turpis nunc,
                id blandit ipsum malesuada maximus. Donec imperdiet nibh at
                neque vestibulum, in lacinia arcu pellentesque. Curabitur et
                felis feugiat, viverra lacus nec, pellentesque tellus. Quisque
                tristique gravida sapien sed finibus.
              </p>
              <p>
                Aenean tristique gravida egestas. Aenean auctor varius sem. In
                mollis purus quis purus laoreet, eget aliquam tellus tincidunt.
                Nullam non eros et tellus tempus maximus eget id leo. Proin
                consequat felis ipsum, a consequat nulla pretium non. Sed in
                hendrerit nulla. Donec condimentum dui sit amet nisl auctor, non
                elementum augue tincidunt. In vitae purus mollis, rhoncus odio
                in, pulvinar magna. Nullam feugiat gravida augue, non bibendum
                nulla luctus quis. Maecenas quis ligula ac ex ullamcorper
                fringilla. Ut sagittis risus et felis consectetur congue.
                Vivamus at risus nulla. Integer sodales tempus libero lacinia
                posuere. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Nam interdum aliquam pellentesque.
              </p>
              <div className="row">
                <div className="col-lg-5">
                  <div className="diary-detail-banner">
                    <img
                      src={detail_banner_2}
                      alt="Diary Detail Banner"
                      width="100%"
                      height="530"
                    />
                  </div>
                </div>
                <div className="col-lg-7 mt-3 mt-lg-0">
                  <div className="diary-detail-banner">
                    <img
                      src={detail_banner_3}
                      alt="Diary Detail Banner"
                      width="100%"
                      height="530"
                    />
                  </div>
                </div>
              </div>
              <p>
                Aenean tristique gravida egestas. Aenean auctor varius sem. In
                mollis purus quis purus laoreet, eget aliquam tellus tincidunt.
                Nullam non eros et tellus tempus maximus eget id leo. Proin
                consequat felis ipsum, a consequat nulla pretium non. Sed in
                hendrerit nulla. Donec condimentum dui sit amet nisl auctor, non
                elementum augue tincidunt. In vitae purus mollis, rhoncus odio
                in, pulvinar magna. Nullam feugiat gravida augue, non bibendum
                nulla luctus quis. Maecenas quis ligula ac ex ullamcorper
                fringilla. Ut sagittis risus et felis consectetur congue.
                Vivamus at risus nulla. Integer sodales tempus libero lacinia
                posuere. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Nam interdum aliquam pellentesque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vestibulum convallis dui ut dictum. Nunc a semper est, ut tempor
                ante. Sed nulla odio, elementum vel finibus ut, congue eget est.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Mauris condimentum leo non
                vestibulum lacinia. Donec massa purus, congue eu est ac, aliquet
                venenatis elit. Donec tincidunt arcu libero, ac dapibus quam
                sollicitudin at. Nunc venenatis nunc tempus nisi auctor, at
                interdum dolor sollicitudin. Sed rhoncus imperdiet diam nec
                pulvinar. Sed consectetur tempus dolor eget ultrices.
                Suspendisse potenti. Suspendisse aliquam condimentum lectus,
                vitae molestie dolor euismod ac. Maecenas imperdiet turpis nunc,
                id blandit ipsum malesuada maximus. Donec imperdiet nibh at
                neque vestibulum, in lacinia arcu pellentesque. Curabitur et
                felis feugiat, viverra lacus nec, pellentesque tellus. Quisque
                tristique gravida sapien sed finibus. Aenean tristique gravida
                egestas. Aenean auctor varius sem. In mollis purus quis purus
                laoreet, eget aliquam tellus tincidunt. Nullam non eros et
                tellus tempus maximus eget id leo. Proin consequat felis ipsum,
                a consequat nulla pretium non. Sed in hendrerit nulla. Donec
                condimentum dui sit amet nisl auctor, non elementum augue
                tincidunt. In vitae purus mollis, rhoncus odio in, pulvinar
                magna. Nullam feugiat gravida augue, non bibendum nulla luctus
                quis. Maecenas quis ligula ac ex ullamcorper fringilla. Ut
                sagittis risus et felis consectetur congue. Vivamus at risus
                nulla. Integer sodales tempus libero lacinia posuere. Interdum
                et malesuada fames ac ante ipsum primis in faucibus. Nam
                interdum aliquam pellentesque.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Diary Section End--> */}
    </main>
  );
};

export default blog_detail;
