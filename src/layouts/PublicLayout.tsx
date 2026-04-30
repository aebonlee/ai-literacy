import { lazy, Suspense, type ReactElement } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from '../components/AuthGuard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import site from '../config/site';

// 페이지 lazy import
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Auth 페이지
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// Shop 페이지
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const OrderConfirmation = lazy(() => import('../pages/OrderConfirmation'));
const OrderHistory = lazy(() => import('../pages/OrderHistory'));

// AI Literacy 전용 페이지
const CurriculumOverview = lazy(() => import('../pages/CurriculumOverview'));
const ChapterList = lazy(() => import('../pages/ChapterList'));
const ChapterDetail = lazy(() => import('../pages/ChapterDetail'));
const NoticeList = lazy(() => import('../pages/NoticeList'));
const QnaList = lazy(() => import('../pages/QnaList'));

// AI 도구활용 페이지
import ToolsLayout from '../components/ToolsLayout';
const ToolsHome = lazy(() => import('../pages/practice/PracticeHome'));
const ToolsChatGPT = lazy(() => import('../pages/practice/PracticeChatGPT'));
const ToolsClaude = lazy(() => import('../pages/practice/PracticeClaude'));
const ToolsGemini = lazy(() => import('../pages/practice/PracticeGemini'));

// 프롬프트 실습 페이지
const PromptHub = lazy(() => import('../pages/prompt/PromptHub'));
const PromptWorkshop = lazy(() => import('../pages/prompt/PromptWorkshop'));
const PromptPractice = lazy(() => import('../pages/prompt/PromptPractice'));

const Loading = (): ReactElement => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="loading-spinner"></div>
  </div>
);

const PublicLayout = (): ReactElement => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Auth */}
            {site.features.auth && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/mypage" element={<AuthGuard><MyPage /></AuthGuard>} />
                <Route path="/mypage/orders" element={<AuthGuard><OrderHistory /></AuthGuard>} />
              </>
            )}

            {/* Shop */}
            {site.features.shop && (
              <>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
              </>
            )}

            {/* Curriculum */}
            <Route path="/curriculum" element={<CurriculumOverview />} />

            {/* Chapter Learning */}
            <Route path="/chapters" element={<ChapterList />} />
            <Route path="/chapters/part1" element={<ChapterList />} />
            <Route path="/chapters/part2" element={<ChapterList />} />
            <Route path="/chapters/part3" element={<ChapterList />} />
            <Route path="/chapters/part4" element={<ChapterList />} />
            <Route path="/chapters/:chapterNumber" element={<ChapterDetail />} />

            {/* AI 도구활용 */}
            <Route path="/tools" element={<ToolsLayout><ToolsHome /></ToolsLayout>} />
            <Route path="/tools/chatgpt" element={<ToolsLayout><ToolsChatGPT /></ToolsLayout>} />
            <Route path="/tools/claude" element={<ToolsLayout><ToolsClaude /></ToolsLayout>} />
            <Route path="/tools/gemini" element={<ToolsLayout><ToolsGemini /></ToolsLayout>} />

            {/* 기존 /practice → /tools 리다이렉트 */}
            <Route path="/practice" element={<Navigate to="/tools" replace />} />
            <Route path="/practice/*" element={<Navigate to="/tools" replace />} />

            {/* 프롬프트 실습 */}
            <Route path="/prompt" element={<Navigate to="/prompt/hub" replace />} />
            <Route path="/prompt/hub" element={<PromptHub />} />
            <Route path="/prompt/workshop" element={<PromptWorkshop />} />
            <Route path="/prompt/test" element={<PromptPractice />} />

            {/* Community */}
            {site.features.community && (
              <>
                <Route path="/community/notice" element={<NoticeList />} />
                <Route path="/community/qna" element={<QnaList />} />
              </>
            )}

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
