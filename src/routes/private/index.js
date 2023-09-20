/* eslint-disable react/jsx-pascal-case */
/* eslint-disable import/no-anonymous-default-export */
import Layout from "../../components/layout/layout";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { Route } from "react-router-dom";
import RequireAuth from "../../auth/require/RequireAuth";
import Dashboard from "../../components/dashboard";
import Beauty from "../../components/dashboard/beauty";
import Wellness from "../../components/dashboard/wellness";
import SelfCare from "../../components/dashboard/self-care";
import Stores from "../../components/dashboard/store";
import Membership from "../../components/dashboard/membership";
import Loyalties from "../../components/dashboard/loyalty";
import Help from "../../components/dashboard/help";
import Tickets from "../../components/dashboard/tickets";
import Home from "../../components/common/home";
import Salons from "../../components/salons/salons";
import SocialeImpact from "../../components/common/sociale_impact";
import ReturnPolicy from "../../components/common/return_policy";
import OurSalons from "../../components/salons/our_locations";
import Subscriptions from "../../components/subscriptions";
import UnlimitedBeautyPlan from "../../components/subscriptions/unlimitedBeautyPlan";
import UnlimitedSelfCare from "../../components/subscriptions/unlimitedSelfcare";
import UnlimitedWellness from "../../components/subscriptions/unlimitedwellness";
import Blog from "../../components/blogs";
import Blog_detail from "../../components/blogs/detail";
import Events from "../../components/events";
import ProductStore from "../../components/store/collection/purple";
import CollectionMen from "../../components/store/collection/men";
import CollectionRepair from "../../components/store/collection/repair";
import ProductHairSerumMarulaOil from "../../components/store/product/product-hair-serum-marula-oil";
import ProductLeaveInConditioner from "../../components/store/product/product-leave-in-conditioner";
import ProductMenPomade from "../../components/store/product/product-men-pomade";
import ProductMenShowerGel from "../../components/store/product/product-men-shower-gel";
import ProductPurpleConditioner from "../../components/store/product/product-purple-conditioner";
import ProductRepairShampoo from "../../components/store/product/product-repair-shampoo";
import Index from "../../components/common/faq";
import AboutUs from "../../components/common/about";
import ContactUs from "../../components/common/contact";
import Career from "../../components/common/career";
import Quiz from "../../components/quiz/index";
import Store from "../../components/store";
import Affiliate from "../../components/common/affiliate";
import Supplier_Network from "../../components/common/supplier_network";
import Reviews from "../../components/common/reviews";
import React from "react";
import Loyalty from "../../components/common/loyalty";
import Invester_Relation from "../../components/common/invester_relation";
import Hair_Blog from "../../components/blogs/hair";
import Nail_Blog from "../../components/blogs/nail";
import Eyebrows_Aesthetics from "../../components/blogs/eyebrows_aesthetics";
import SoinsKarisma from "../../components/blogs/soinskarisma";
import SalonsBlog from "../../components/blogs/salons";
import News from "../../components/common/news";
import PaymentInfo from "../../components/payment_gateways/stripe/paymentInfo";
import Profile from "../../components/profile/index"
// import { GetToken } from "../../helpers/getToken";

export default [
  <Route path="/" element={<Layout />}>
    {/* Salons protected routes*/}
    <Route>
      <Route exact path="/" element={<Home />} />
    </Route>

    <Route element={<RequireAuth />}>
      <Route exact path="/quiz" element={<Quiz />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="/payment-status" element={<PaymentInfo />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="/karisma-salons" element={<Salons />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="/social-impact" element={<SocialeImpact />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="return-policy" element={<ReturnPolicy />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="affiliate" element={<Affiliate />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="supplier-network" element={<Supplier_Network />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="reviews" element={<Reviews />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="loyalty" element={<Loyalty />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="invester-relation" element={<Invester_Relation />} />
    </Route>
    <Route>
      <Route exact path="/our-salons" element={<OurSalons />} />
    </Route>
    <Route>
      <Route exact path="/subscriptions" element={<Subscriptions />} />
      <Route
        exact
        path="/subscription-unlimited-beauty/:id"
        element={<UnlimitedBeautyPlan />}
      />
      <Route
        exact
        path="/subscription-unlimited-self-care"
        element={<UnlimitedSelfCare />}
      />
      <Route
        exact
        path="/subscription-unlimited-wellness"
        element={<UnlimitedWellness />}
      />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/blog/detail" element={<Blog_detail />} />
      <Route exact path="/blog/hair" element={<Hair_Blog />} />
      <Route exact path="/blog/nail" element={<Nail_Blog />} />
      <Route exact path="/blog/soins-karisma" element={<SoinsKarisma />} />
      <Route exact path="/blog/salons" element={<SalonsBlog />} />
      <Route
        exact
        path="/blog/eyebrows-aesthetics"
        element={<Eyebrows_Aesthetics />}
      />
      <Route exact path="/blog/news" element={<News />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route exact path="/events" element={<Events />} />
    </Route>
    {/* Collection Routes */}
    <Route>
      <Route
        exact
        path="/store/collection/product/:id"
        element={<ProductStore />}
      />
    </Route>
    <Route>
      <Route exact path="/store/collection/men" element={<CollectionMen />} />
    </Route>
    <Route>
      <Route
        exact
        path="/store/collection/repair"
        element={<CollectionRepair />}
      />
    </Route>
    {/* Products Routes */}
    <Route>
      <Route
        exact
        path="/store/product/hair-serum-marula-oil"
        element={<ProductHairSerumMarulaOil />}
      />
    </Route>
    <Route>
      <Route
        exact
        path="/store/product/leave-in-conditioner"
        element={<ProductLeaveInConditioner />}
      />
    </Route>
    <Route>
      <Route
        exact
        path="/store/product/men-pomade"
        element={<ProductMenPomade />}
      />
    </Route>
    <Route>
      <Route
        exact
        path="/store/product/men-shower-gel"
        element={<ProductMenShowerGel />}
      />
    </Route>
    <Route>
      <Route
        exact
        path="/store/product/product-purple-conditioner"
        element={<ProductPurpleConditioner />}
      />
    </Route>
    <Route>
      <Route
        exact
        path="/store/product/product-repair-shampoo"
        element={<ProductRepairShampoo />}
      />
    </Route>
    {/* Company Pages */}
    <Route element={<RequireAuth />}>
      <Route exact path="/faq" element={<Index />} />
    </Route>
    <Route>
      <Route exact path="/about-us" element={<AboutUs />} />
    </Route>
    <Route>
      <Route exact path="/contact-us" element={<ContactUs />} />
    </Route>
    <Route>
      <Route exact path="/career" element={<Career />} />
    </Route>
    {/* Store Routes */}
    <Route>
      <Route exact path="/store" element={<Store />} />
    </Route>
  </Route>,
  <Route path="/" element={<DashboardLayout
   />}>
   <Route element={<RequireAuth />}>
   <Route exact path="/profile" element={<Profile />} />
 </Route>,
   <Route element={<RequireAuth />}>
   <Route exact path="/dashboard" element={<Dashboard />} />
 </Route>
 <Route element={<RequireAuth />}>
   <Route exact path="/dashboard/beauty" element={<Beauty />} />
 </Route>
 <Route element={<RequireAuth />}>
   <Route exact path="/dashboard/wellness" element={<Wellness />} />
 </Route>
 <Route element={<RequireAuth />}>
   <Route exact path="/dashboard/self-care" element={<SelfCare />} />
 </Route>
 <Route element={<RequireAuth />}>
   <Route exact path="/dashboard/store" element={<Stores />} />
 </Route>
 <Route element={<RequireAuth />}>
   <Route exact path="/dashboard/membership" element={<Membership />} />
 </Route>
 <Route element={<RequireAuth />}>
   <Route exact path="/dashboard/loyalty" element={<Loyalties />} />
 </Route>
 <Route element={<RequireAuth />}>
   <Route exact path="/dashboard/help" element={<Help />} />
 </Route>
 <Route element={<RequireAuth />}>
   <Route exact path="/dashboard/tickets" element={<Tickets />} />
 </Route>
 </Route>
];
