/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type ReactNode } from 'react';
import { MessageCircle, Download, CheckCircle, Info, Verified, ChevronDown, Facebook, Instagram, Youtube, Twitter, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer, link }: { question: string; answer: ReactNode; link?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="font-bold">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
              {answer}
              {link && (
                <div className="mt-4 text-center sm:text-left">
                  <a 
                    className="inline-block px-6 py-2 bg-[#11d493] text-slate-900 font-bold rounded-lg hover:brightness-105 transition-all text-sm shadow-md" 
                    href={link} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    Sign up MulaStar
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-[#f6f8f7] dark:bg-[#10221c] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#11d493]/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#10221c]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#11d493] text-3xl">token</span>
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">MulaStar</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-[#11d493] transition-colors" href="#features">Features</a>
              <a className="text-sm font-medium hover:text-[#11d493] transition-colors" href="#how-it-works">How it Works</a>
              <a className="text-sm font-medium hover:text-[#11d493] transition-colors" href="#app">App</a>
              <a className="text-sm font-medium hover:text-[#11d493] transition-colors" href="#faq">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <a className="hidden sm:flex px-4 py-2 text-sm font-bold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all" href="https://mulastar.com/register.php?ref=samkiliswa">Login</a>
              <a className="px-5 py-2 text-sm font-bold rounded-lg bg-[#11d493] text-slate-900 hover:brightness-105 transition-all shadow-lg shadow-[#11d493]/20 flex items-center justify-center" href="https://mulastar.com/register.php?ref=samkiliswa">Sign Up</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                MulaStar – <span className="text-[#11d493]">Make Money Online</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                MulaStar is an online earning platform designed to help you make money through simple digital activities. From watching short videos and clicking ads to blogging, playing games, and learning Forex, MulaStar combines entertainment, education, and income opportunities in one powerful dashboard.<br /><br />
                Whether you're a beginner or an experienced online earner, MulaStar gives you multiple ways to grow your income — anytime, anywhere.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a className="px-8 py-4 bg-[#11d493] text-slate-900 font-bold rounded-xl shadow-xl shadow-[#11d493]/25 hover:scale-105 transition-transform inline-block" href="https://mulastar.com/register.php?ref=samkiliswa">Sign Up MulaStar</a>
                <a className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors inline-block" href="https://mulastar.com/register.php?ref=samkiliswa">How MulaStar Works</a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <span className="material-symbols-outlined text-xs">person</span>
                    </div>
                  ))}
                </div>
                <span>Joined by 10,000+ active earners this month</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#11d493]/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 aspect-video flex items-center justify-center overflow-hidden group">
                <div className="w-full h-full bg-slate-50 dark:bg-slate-800 rounded-lg flex flex-col p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    <div className="h-8 w-8 bg-[#11d493]/20 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#11d493] text-sm">notifications</span>
                    </div>
                  </div>
                  <div className="h-20 w-full bg-[#11d493]/10 rounded-xl p-4 flex flex-col justify-end">
                    <div className="h-2 w-16 bg-[#11d493]/30 rounded mb-2"></div>
                    <div className="h-6 w-32 bg-[#11d493] rounded"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 h-full">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-[#10221c]/50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">How MulaStar Works</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              MulaStar provides TikTok and YouTube videos, ad clicks, blogging, trivia questions, premium Forex tutorials, enlightening e-books, and competitive chess and draughts games to boost your earnings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'video_library', title: 'TikTok & YouTube', desc: 'Watch TikTok videos directly from your MulaStar dashboard and earn money per view. This is an enjoyable way to earn while watching entertaining content. Just like TikTok tasks, users can earn by watching YouTube videos from their dashboard.' },
              { icon: 'spool', title: 'Instagram & FB Reels', desc: 'Users In MulaStar can also earn by watching Instagram and Facebook Reels for about 30 seconds. Earnings are credited for each completed view, expanding your daily income options.' },
              { icon: 'edit_note', title: 'Blogging & Writing', desc: 'MulaStar rewards users who write quality articles on trending topics. If you enjoy blogging or content creation, you can earn money by publishing engaging and informative articles.' },
              { icon: 'ads_click', title: 'Paid Ad Clicks', desc: 'Earn money by clicking short advertisements that last only 5 seconds. These tasks are fast, easy, and require no special skills—perfect for beginners and busy users.' },
              { icon: 'sports_esports', title: 'Online Games', desc: 'MulaStar features interactive online games where users compete with others. Winners earn rewards based on performance, making it ideal for gamers who want to monetize their skills.' },
              { icon: 'casino', title: 'Free & Bet Spins', desc: 'Every new user receives a Free Spin upon joining MulaStar. This feature allows you to spin a reward wheel and win instant bonuses such as cash rewards and extra spins.' },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-[#11d493]/30 transition-colors"
              >
                <span className="material-symbols-outlined text-[#11d493] text-4xl mb-4">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-[#f6f8f7] dark:bg-[#10221c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#11d493]/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-6">Key Platform Features</h2>
                <div className="space-y-6">
                  {[
                    { icon: 'groups', title: 'Affiliate Marketing', desc: 'Refer friends and earn up to 55% commission on their activities.' },
                    { icon: 'card_giftcard', title: 'Welcome Bonus', desc: 'Get a 55% instant bonus plus free spins upon successful registration.' },
                    { icon: 'trending_up', title: 'Free Forex Classes', desc: 'Master the markets with our professional trading courses included for free.' },
                    { icon: 'badge', title: 'Agent Bonus', desc: 'Unlock additional rewards and salary incentives by becoming a MulaStar agent.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-[#11d493] rounded-xl flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-slate-900">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="aspect-square bg-slate-800 rounded-3xl border border-slate-700 flex items-center justify-center p-12">
                  <span className="material-symbols-outlined text-[120px] text-[#11d493]">analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-[#10221c]/50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Four simple steps to start your financial journey with MulaStar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Register Account', desc: 'Sign up in seconds with your email and basic details.' },
              { step: '2', title: 'Activate Account', desc: 'Complete the activation process to unlock your dashboard tasks.' },
              { step: '3', title: 'Complete Tasks', desc: 'Watch, click, and play to accumulate rewards in your wallet.' },
              { step: '4', title: 'Withdraw', desc: 'Request your earnings and get paid directly to your account.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#11d493]/20 text-[#11d493] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Guide */}
      <section className="py-20 bg-[#f6f8f7] dark:bg-[#10221c]" id="registration-guide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black sm:text-4xl mb-4">How to Register MulaStar</h2>
            <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
              Mulastar is an online earning platform where users can make money by completing simple tasks, spinning wheels, blogging, and participating in daily activities. If you want to join, follow this clear guide to complete your Mulastar registration successfully.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { step: '1', title: 'Visit the Official Website', content: 'Go to the Official Mulastar Website. Always confirm you are on the correct URL to ensure your security.' },
              { step: '2', title: 'Complete the Form', content: (
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#11d493]" /> Choose a unique Username</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#11d493]" /> Mobile Number (with country code)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#11d493]" /> Valid Email Address</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#11d493]" /> Create a strong Password</li>
                </ul>
              )},
              { step: '3', title: 'Referral Code (Optional)', content: 'Enter a referral code if you have one. For example, you can use samkiliswa to join under a trusted referrer.' },
              { step: '4', title: 'Terms & Conditions', content: 'Read and accept the Terms and Conditions to proceed with your registration on the platform.' },
              { step: '5', title: 'Submit Registration', content: 'Review your details and click the \'Sign Up\' or \'Register\' button to create your account.' },
              { step: '6', title: 'Log In & Explore', content: 'Once successful, log in with your credentials and start exploring the various ways to earn money.' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="w-12 h-12 bg-[#11d493]/20 text-[#11d493] rounded-xl flex items-center justify-center mb-6 text-xl font-black">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <div className="text-slate-600 dark:text-slate-400 text-sm">{item.content}</div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto p-6 bg-[#11d493]/5 border border-[#11d493]/20 rounded-2xl mb-12">
            <h4 className="text-lg font-bold flex items-center gap-2 mb-4"><Info className="w-5 h-5 text-[#11d493]" /> Important Tips</h4>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex gap-3"><span className="text-[#11d493] font-bold">•</span> Ensure all details provided are accurate to avoid withdrawal issues.</li>
              <li className="flex gap-3"><span className="text-[#11d493] font-bold">•</span> Use a secure and private login to protect your earnings.</li>
              <li className="flex gap-3"><span className="text-[#11d493] font-bold">•</span> Multiple accounts are not allowed and may result in a ban.</li>
            </ul>
          </div>
          <div className="text-center">
            <a className="px-10 py-4 bg-[#11d493] text-slate-900 font-bold rounded-xl shadow-xl shadow-[#11d493]/25 hover:scale-105 transition-transform inline-block" href="https://mulastar.com/register.php?ref=samkiliswa">Register Now on MulaStar</a>
          </div>
        </div>
      </section>

      {/* Login Guide */}
      <section className="py-20 bg-white dark:bg-[#10221c]/50" id="login-guide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black sm:text-4xl mb-4 uppercase tracking-tight">Login MulaStar</h2>
            <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400">Logging into your Mulastar account is quick and easy. Follow the steps below to access your dashboard successfully.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { step: '1', title: 'Visit the Official Website', content: 'Open your browser and click the link below: https://mulastar.co' },
              { step: '2', title: 'Click the \'Sign In\' Button', content: 'On the homepage, locate and click the \'Sign In Mulastar\' button. This will take you to the login page.' },
              { step: '3', title: 'Enter Your Username', content: 'Type in your Mulastar username exactly as you used when creating your account. (Make sure there are no spaces or spelling mistakes)' },
              { step: '4', title: 'Enter Your Password', content: 'Carefully enter your password in the password field.' },
              { step: '5', title: 'Click \'Sign In\'', content: 'After confirming your details are correct, click the \'Sign In\' button to log into your Mulastar dashboard.' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-[#f6f8f7] dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="w-12 h-12 bg-[#11d493]/20 text-[#11d493] rounded-xl flex items-center justify-center mb-6 text-xl font-black">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto p-6 bg-[#11d493]/5 border border-[#11d493]/20 rounded-2xl mb-12">
            <h4 className="text-lg font-bold flex items-center gap-2 mb-4"><Verified className="w-5 h-5 text-[#11d493]" /> Login Tips</h4>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex gap-3"><span className="text-[#11d493] font-bold">•</span> Ensure you are using the correct username, not your email or phone number.</li>
              <li className="flex gap-3"><span className="text-[#11d493] font-bold">•</span> Check your internet connection for smooth access.</li>
              <li className="flex gap-3"><span className="text-[#11d493] font-bold">•</span> If you forget your password, use the \'Forgot Password\' option to reset it.</li>
            </ul>
          </div>
          <div className="text-center">
            <a className="px-10 py-4 bg-[#11d493] text-slate-900 font-bold rounded-xl shadow-xl shadow-[#11d493]/25 hover:scale-105 transition-transform inline-block" href="https://mulastar.com/register.php?ref=samkiliswa">Login to MulaStar Now</a>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-[#11d493]/10" id="app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-[#11d493] font-black text-xl mb-4">MulaStar App</h3>
              <h2 className="text-4xl font-black mb-2">How to Download & Install the MulaStar App</h2>
              <ol className="text-left space-y-3 mb-8 text-slate-700 dark:text-slate-300">
                <li className="flex gap-3"><span className="font-bold text-[#11d493]">1.</span> Visit the official MulaStar website</li>
                <li className="flex gap-3"><span className="font-bold text-[#11d493]">2.</span> Scroll to the bottom and click Download MulaStar App</li>
                <li className="flex gap-3"><span className="font-bold text-[#11d493]">3.</span> Download the APK file</li>
                <li className="flex gap-3"><span className="font-bold text-[#11d493]">4.</span> Enable Install from Unknown Sources in your phone settings</li>
                <li className="flex gap-3"><span className="font-bold text-[#11d493]">5.</span> Install the app and open it</li>
                <li className="flex gap-3"><span className="font-bold text-[#11d493]">6.</span> Register or log in to your account</li>
              </ol>
              <p className="text-lg font-medium text-slate-900 dark:text-white mb-8">Start watching videos, spinning rewards, inviting friends, and earning money.</p>
              <a 
                href="https://www.appcreator24.com/app3856918-i5xhm6" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors mx-auto lg:ml-0 w-fit"
              >
                <Download className="w-5 h-5" />
                Install MulaStar App
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 w-1/2 h-6 bg-slate-800 left-1/4 rounded-b-xl"></div>
                <div className="p-4 pt-10">
                  <div className="w-full h-8 bg-slate-700 rounded mb-4"></div>
                  <div className="w-full h-32 bg-[#11d493]/20 rounded-xl mb-4"></div>
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-slate-800 rounded"></div>
                    <div className="w-full h-12 bg-slate-800 rounded"></div>
                    <div className="w-full h-12 bg-slate-800 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white dark:bg-[#10221c]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center">MulaStar Reviews</h2>
          <p className="text-xl font-bold text-center text-[#11d493] mt-2 mb-4">Hear From Our Happy Clients: Their Stories</p>
          <p className="max-w-4xl mx-auto text-center text-slate-600 dark:text-slate-400 mb-16">
            MulaStar is widely described as an easy-to-use and engaging online earning platform. Users appreciate its simple tasks, multiple earning options, mobile-friendly design, and attractive bonuses, making it a convenient choice for earning extra income online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Emily R.', role: 'Marketing Lead', text: 'Good for beginners. With simple registration and free learning resources like Forex classes, MulaStar is suitable for newcomers.' },
              { name: 'Mark T.', role: 'Startup Founder', text: 'Quick task completion. Most tasks take only a few seconds, which is perfect for people with limited time.' },
              { name: 'John Doe', role: 'Founder', text: 'Easy to use and well organized. The dashboard is simple to navigate, and tasks are easy to understand even for new users.' },
              { name: 'Jason M.', role: 'Product Manager', text: 'Bonuses add extra value. Free spins, welcome bonuses, and top winners’ rewards make the platform more rewarding.' },
              { name: 'Lena K.', role: 'UX Consultant', text: 'Fun ways to earn money. Watching videos, spinning games, and playing online games makes earning enjoyable.' },
              { name: 'Aliana Lorel', role: 'Founder – Lorel Technology', text: 'A good platform for extra income. MulaStar provides multiple earning options in one place, allowing users to choose what suits them best.' },
              { name: 'Sara D.', role: 'Freelancer', text: 'Mobile-friendly platform. The MulaStar app allows users to earn conveniently from their smartphones.' },
              { name: 'David V.', role: 'IT Director', text: 'Great referral commissions. The 55% referral commission makes MulaStar attractive for users who enjoy inviting others.' },
              { name: 'Peter Brandson', role: 'Owner – Brandson Industry', text: 'MulaStar makes online earning simple. The platform offers many easy tasks like watching videos and clicking ads, making it beginner-friendly' },
            ].map((review, idx) => (
              <div key={idx} className="p-8 bg-[#f6f8f7] dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 h-full flex flex-col justify-between">
                <p className="italic text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#11d493]/20 flex items-center justify-center font-bold text-[#11d493]">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-slate-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legit Section */}
      <section className="py-20 bg-[#f6f8f7] dark:bg-[#10221c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-8">Is MulaStar Legit?</h2>
          <div className="p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              MulaStar operates on a foundation of total transparency. Unlike other platforms, we provide a structured dashboard where you can track every cent you earn in real-time. Our active community of over 100,000 users is a testament to our reliability.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-black text-[#11d493]">100%</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Payouts</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#11d493]">24/7</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Support</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#11d493]">SEC</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Verified</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#11d493]">Fast</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Withdrawals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-[#10221c]/50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
          <p className="text-xl font-bold text-center text-[#11d493] mt-2 mb-4">Got Questions? We’ve Got Answers.</p>
          <p className="max-w-4xl mx-auto text-center text-slate-600 dark:text-slate-400 mb-12">
            MulaStar Provides TikTok and YouTube Videos, Ad clicks, Blogging, Trivia questions, premium Forex tutorials, enlightening e-books, and competitive chess and draughts games to boost your earnings. Here is What you need to know:
          </p>
          <div className="space-y-4">
            <FAQItem 
              question="1. What is MulaStar?" 
              answer="MulaStar is an online earning platform designed to help users make money by completing simple digital tasks and participating in interactive activities. It provides multiple income opportunities in one place, making it suitable for beginners as well as experienced online earners. With MulaStar, users can earn through activities such as watching videos, clicking ads, writing blogs, playing games, spinning to win rewards, and referring friends."
              link="https://mulastar.com/register.php?ref=samkiliswa"
            />
            <FAQItem 
              question="2. How MulaStar works!" 
              answer="MulaStar works by allowing users to earn money online through simple tasks, entertainment activities, and referral programs. After creating an account and activating it, users gain access to a dashboard with all earning features. Users can earn by watching ads, TikTok and YouTube videos, playing online games, and spinning rewards."
              link="https://mulastar.com/register.php?ref=samkiliswa"
            />
            <FAQItem 
              question="3. How to Download MulaStar App" 
              answer={
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Visit the Official MulaStar Website.</li>
                  <li>Scroll down the homepage and click the 'Download MulaStar App' button.</li>
                  <li>Download the APK file.</li>
                  <li>Allow Installation from Unknown Sources in your phone settings.</li>
                  <li>Install the App and tap 'Open'.</li>
                  <li>Create an account or log in to start earning.</li>
                </ul>
              }
              link="https://mulastar.com/register.php?ref=samkiliswa"
            />
            <FAQItem 
              question="4. How to Register MulaStar" 
              answer={
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Visit the Official MulaStar Website and click 'Sign Up / Register'.</li>
                  <li>Choose a Unique Username.</li>
                  <li>Select your Country Code and enter your phone number.</li>
                  <li>Enter a valid Email Address.</li>
                  <li>Create and confirm a secure Password.</li>
                  <li>Click 'Create Account'.</li>
                </ul>
              }
              link="https://mulastar.com/register.php?ref=samkiliswa"
            />
            <FAQItem 
              question="5. How to Login MulaStar" 
              answer={
                <ul className="list-disc ml-5 space-y-1">
                  <li>Visit the Official MulaStar Website and click 'Sign In'.</li>
                  <li>Enter your Username and Password.</li>
                  <li>Click 'Sign In' to access your dashboard and manage your earnings.</li>
                </ul>
              }
              link="https://mulastar.com/register.php?ref=samkiliswa"
            />
            <FAQItem 
              question="6. Is MulaStar Legit?" 
              answer="Yes, MulaStar is a legit online earning platform. It operates transparently, allowing users to track earnings directly from their dashboard. It offers multiple verified earning methods like ads, videos, games, blogs, and referrals."
              link="https://mulastar.com/register.php?ref=samkiliswa"
            />
            <FAQItem 
              question="7. Is MulaStar Available In all Countries?" 
              answer="Yes, MulaStar is Available Globally."
              link="https://mulastar.com/register.php?ref=samkiliswa"
            />
            <FAQItem 
              question="8. MULASTAR AGENCIES ACTIVATION FEES:" 
              answer={
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                  <li>Kenya🇰🇪: KSH 500</li>
                  <li>Tanzania🇹🇿: TZS 11,000</li>
                  <li>Uganda🇺🇬: UGX 19,000</li>
                  <li>Rwanda🇷🇼: RWF 6,500</li>
                  <li>Nigeria🇳🇬: NGN 8,000</li>
                  <li>Burundi🇧🇮: BIF 26,000</li>
                  <li>Zambia🇿🇲: ZK 130</li>
                  <li>Malawi🇲🇼: MK 26,000</li>
                  <li>Others🎌: USD 8</li>
                </ul>
              }
              link="https://mulastar.com/register.php?ref=samkiliswa"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-[#11d493] text-3xl">token</span>
                <span className="text-xl font-black tracking-tight">MulaStar</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The world's leading micro-task earning platform. Empowering thousands to reach financial freedom one click at a time.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a className="hover:text-[#11d493]" href="https://mulastar.com/register.php?ref=samkiliswa">Login</a></li>
                <li><a className="hover:text-[#11d493]" href="https://mulastar.com/register.php?ref=samkiliswa">Register</a></li>
                <li><a className="hover:text-[#11d493]" href="#app">App Download</a></li>
                <li><a className="hover:text-[#11d493]" href="#">Earning Tips</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Support</h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a className="hover:text-[#11d493]" href="#faq">FAQ</a></li>
                <li><a className="hover:text-[#11d493]" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-[#11d493]" href="#">Terms of Service</a></li>
                <li><a className="hover:text-[#11d493]" href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Connect With Us</h5>
              <div className="flex gap-4 mb-6">
                <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#11d493] hover:text-slate-900 transition-all" href="#">
                  <Facebook className="w-5 h-5" />
                </a>
                <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#11d493] hover:text-slate-900 transition-all" href="#">
                  <Instagram className="w-5 h-5" />
                </a>
                <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#11d493] hover:text-slate-900 transition-all" href="#">
                  <Twitter className="w-5 h-5" />
                </a>
                <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#11d493] hover:text-slate-900 transition-all" href="#">
                  <Send className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs text-slate-500">Join our official Telegram for daily updates.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2024 MulaStar Ecosystem. All rights reserved.</p>
            <p>Designed for global financial inclusion.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        aria-label="Contact us on WhatsApp" 
        className="fixed bottom-5 right-5 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300" 
        href="https://wa.me/254794634552?text=Hello,%20Am%20Interested." 
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
