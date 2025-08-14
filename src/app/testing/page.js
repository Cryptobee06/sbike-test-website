'use client';
import { useState } from 'react';
import { Star, CheckCircle, Zap, Shield, TrendingUp, Volume2, Heart, Award, Calendar, User, Clock, ChevronRight, Sparkles, BadgeCheck, Wifi, Dumbbell, Activity } from 'lucide-react';
import FAQ from '@/components/guide/FAQ';
const brands = [
  'Sportstech',
  'Citysports', 
  'Kiddoza',
  'Superun',
  'Urevo'
];

const testData = {
    Sportstech: {
        image: '/images/sporstechtest.png',
        overallScore: 4.86,
        status: 'Passed',
      features: [
        'Rotatable 21.5-inch touch display with Sportstech Live app for immersive training and real-time tracking.',
        'Black frame with dimensions 182 × 87.5 × 177 cm and supports users up to 150 kg.',
        'Top speed of 20 km/h and 15 incline levels ideal for endurance or sprint workouts.',
        '7-color LED ambient lighting changes based on speed or pulse for visual feedback.',
        'Folding design and built-in transport wheels for convenient storage and mobility.'
      ],
      tests: {
        Speed: {
          description: 'Sportstech excels in speed performance with impressive acceleration and sprint capabilities. During testing, it achieved top speeds that satisfied even experienced runners, maintaining stability and comfort at all intensity levels. Its responsive controls allow seamless transitions between speed modes without delay.',
          rating: '4.8 / 5',
          status: 'Passed',
          icon: Zap
        },
        Durability: {
          description: 'This model withstood over 100 hours of simulated high-impact workouts without showing signs of wear or structural compromise. The belt retained its grip, and the deck showed minimal compression fatigue. With its commercial-grade frame, reinforced joints, and corrosion-resistant coating, Sportstech sets the standard for long-term durability.',
          rating: '5 / 5',
          status: 'Passed',
          icon: Shield
        },
        Incline: {
          description: 'Incline functionality is fast, accurate, and holds its angle reliably. The motorized incline system reacted to changes mid-workout with little lag, offering up to 15 levels of elevation. It adapts well to HIIT and endurance incline training.',
          rating: '4.7 / 5',
          status: 'Passed',
          icon: TrendingUp
        },
        Noise: {
          description: 'Despite its powerful motor, Sportstech maintained near-silent operation. It consistently produced sound levels under 55 decibels across all speeds. This makes it suitable for apartment living or early morning sessions without disturbing others.',
          rating: '4.9 / 5',
          status: 'Passed',
          icon: Volume2
        },
        Comfort: {
          description: 'Comfort testing covered belt cushioning, deck width, handgrip positioning, and display ergonomics. Sportstech offers a roomy deck that accommodates natural stride lengths and reduces joint stress.',
          rating: '4.9 / 5',
          status: 'Passed',
          icon: Heart
        }
      },
      individualReview: {
        title: 'Individual Review: Sportstech sWalk Lite – Test Winner 2025',
        modelName: 'Sportstech sWalk Lite',
        verdict: 'Perfect for Office & Home',
        rating: 5.0,
        publishDate: 'January 2025',
        author: 'Steve Austin',
        expertise: 'Certified Personal Trainer',
        testDuration: 'Extended testing',
        testCriteria: {
          'Design & Build Quality': {
            rating: 5,
            description: 'Slim, high-quality finish, modern LED display'
          },
          'Noise Level': {
            rating: 5,
            description: 'Extremely quiet (< 55 dB)'
          },
          'Cushioning & Comfort': {
            rating: 5,
            description: 'Smooth, stable running surface'
          },
          'Control': {
            rating: 5,
            description: 'App + remote, intuitive operation'
          },
          'Office Suitability': {
            rating: 5,
            description: 'Perfect for working while standing or walking'
          },
          'Value for Money': {
            rating: 5,
            description: 'Very fair for the quality'
          }
        },
        extras: [
          'LCD display',
          'Calorie counter',
          'Step counter'
        ],
        suitableFor: 'Office & home, daily walking, healthy working',
        mainDescription: "The Sportstech sWalk Lite is a compact, quiet walking pad specially designed for home office use. At just 12 cm high, it fits easily under desks and is simple to store when not in use. Its robust housing, modern LED display, and gently cushioned running surface provide a pleasant user experience.",
        testFindings: "In testing, it particularly impressed with its low noise level under 55 dB. Even during extended sessions, it remained virtually silent—ideal for use in offices or apartments with thin walls. Control is available via app or remote—both intuitive and reliable.",
        specialFeature: "An incline function—rare in this price range—makes the training both joint-friendly and effective.",
        conclusion: "For people who want to work standing or walking for several hours a day, the sWalk Lite is the best choice in our 2025 test."
      }
    },
    Citysports: {
        image: '/CITYSPORTS/citysportstest.png',
        overallScore: 3.84,
        status: 'Passed',
      features: [
        'Compact, foldable design suited for small apartments and easy storage.',
        'Minimal user interface ideal for simple walking and light jogging routines.',
        'Quiet motor suitable for shared housing environments.',
        'Built-in display for speed, time, and calorie tracking.',
        'Moderate weight support and lightweight portability.'
      ],
      tests: {
        Speed: {
          description: 'Citysports Walkingpads provide consistent but moderate speed performance ideal for walking and light jogging. Its motor responds well at lower speed levels, though less suited for intense sprinting.',
          rating: '3.9 / 5',
          status: 'Passed',
          icon: Zap
        },
        Durability: {
          description: 'The lightweight build of Citysports lends to easy transport but limits its durability under high-impact conditions. It performs well for daily walking sessions and moderate jogging without structural strain.',
          rating: '3.8 / 5',
          status: 'Passed',
          icon: Shield
        },
        Incline: {
          description: 'Most Citysports models lack motorized incline functionality, relying instead on manual elevation or fixed flat positions. This limits dynamic incline-based workouts.',
          rating: '3.0 / 5',
          status: 'Limited',
          icon: TrendingUp
        },
        Noise: {
          description: 'Citysports machines are impressively quiet, largely due to low motor wattage and minimal vibration during operation. It ranks high for users in shared housing or late-night sessions.',
          rating: '4.8 / 5',
          status: 'Passed',
          icon: Volume2
        },
        Comfort: {
          description: 'Compact size reduces stride length comfort for taller users but suits shorter individuals well. The belt cushioning is fair, and handrails are stable though minimal.',
          rating: '3.7 / 5',
          status: 'Passed',
          icon: Heart
        }
      },
      individualReview: {
        title: 'Individual Review: CITYSPORTS Bluetooth Walkingpad',
        modelName: 'CITYSPORTS Bluetooth Walkingpad',
        verdict: 'Not Recommended for Regular Use',
        rating: 2.0,
        publishDate: 'January 2025',
        author: 'Steve Austin',
        expertise: 'Certified Personal Trainer',
        testDuration: 'Extended testing',
        testCriteria: {
          'Design & Build Quality': {
            rating: 3,
            description: 'Simple and portable, but wobbly at speed'
          },
          'Noise Level': {
            rating: 2,
            description: 'Loud even at medium speed, with creaking and buzzing sounds'
          },
          'Cushioning & Comfort': {
            rating: 2,
            description: 'Hard surface with vibration during faster walking'
          },
          'Control': {
            rating: 3,
            description: 'Remote only, Bluetooth often unreliable'
          },
          'Office Suitability': {
            rating: 2,
            description: 'Too noisy and unstable for quiet office or apartment use'
          },
          'Value for Money': {
            rating: 2,
            description: 'Disappointing due to poor build quality and durability'
          }
        },
        extras: [
          'Bluetooth speaker'
        ],
        suitableFor: 'Short, infrequent walks at home',
        mainDescription: "The CITYSPORTS Walkingpad is aimed at beginners looking for a compact walking pad for home use. But in testing, the build quality disappointed. Components felt loose during setup, and the device began to vibrate and wobble at higher speeds.",
        testFindings: "It was particularly noisy. Although marketed as \"quiet,\" in practice it produced creaking, buzzing, and rattling noises. At higher speeds, it droned loudly—unsuitable for apartments or offices. Reliability was also lacking: after a short time, the unit heated up, releasing a plastic smell. Bluetooth was inconsistent, and the remote only worked intermittently. The belt shifted sideways, worsening the noise and making walking feel unstable.",
        specialFeature: "Built-in Bluetooth speaker—but functionality is inconsistent and does not justify the overall downsides.",
        conclusion: "It may be a temporary solution for short walks, but it is not recommended for regular office use due to poor stability, high noise, and limited durability."
      }
      
    },
    Kiddoza: {
        image: '/images/kiddozatest.png',
        overallScore: 3.48,
        status: 'Passed',
      features: [
        'Youth-friendly design with colorful UI and easy control panel.',
        'Compact deck suited for casual walks or light jogging at home.',
        'Lightweight construction with minimal setup requirements.',
        'Pre-set programs for warm-ups and beginner cardio routines.',
        'Soft handles and moderate cushioning for family use.'
      ],
      tests: {
        Speed: {
          description: 'Kiddoza reaches moderate top speeds and performs reliably at basic levels. It is not intended for serious athletes or performance running. Controls are intuitive, and speed settings change smoothly with minimal lag.',
          rating: '3.5 / 5',
          status: 'Passed',
          icon: Zap
        },
        Durability: {
          description: 'Made from lightweight materials, Kiddoza prioritizes cost-effectiveness over industrial resilience. Acceptable for periodic use, but not for rigorous daily workouts.',
          rating: '3.6 / 5',
          status: 'Passed',
          icon: Shield
        },
        Incline: {
          description: 'Many Kiddoza models feature no incline or only fixed manual incline settings. This restricts exercise variety. It caters well to users not focused on incline-based strength building.',
          rating: '2.9 / 5',
          status: 'Limited',
          icon: TrendingUp
        },
        Noise: {
          description: 'Kiddoza units are modestly quiet thanks to their smaller motors. Sound level remains acceptable for home environments but may increase with extended use.',
          rating: '4.0 / 5',
          status: 'Passed',
          icon: Volume2
        },
        Comfort: {
          description: 'Kiddoza includes soft handles and basic cushioning. Smaller deck width suits youth and smaller adults. It lacks advanced ergonomic support found in premium brands.',
          rating: '3.4 / 5',
          status: 'Passed',
          icon: Heart
        }
      },
      individualReview: {
        title: 'Individual Review: Kiddoza Walking Pad',
        modelName: 'Kiddoza Walking Pad',
        verdict: 'Not Recommended for Any Use',
        rating: 1.5,
        publishDate: 'January 2025',
        author: 'Steve Austin',
        expertise: 'Certified Personal Trainer',
        testDuration: 'Extended testing',
        testCriteria: {
          'Design & Build Quality': {
            rating: 2,
            description: 'Very basic design with poor construction quality'
          },
          'Noise Level': {
            rating: 2,
            description: 'Noticeably loud even at moderate speeds'
          },
          'Cushioning & Comfort': {
            rating: 1,
            description: 'Almost no cushioning; belt hard and uncomfortable'
          },
          'Control': {
            rating: 2,
            description: 'Outdated remote; app unreliable and hard to use'
          },
          'Office Suitability': {
            rating: 1,
            description: 'Too loud and unstable for any work environment'
          },
          'Value for Money': {
            rating: 2,
            description: 'Cheap, and it shows in build and performance'
          }
        },
        extras: [
          'LCD display'
        ],
        suitableFor: 'Occasional casual walking only, and even that with caution',
        mainDescription: "The Kiddoza Walking Pad is a very basic model aimed at users with minimal demands. However, testing showed that the device had serious flaws right out of the box—some units didn’t start, displayed error messages, or even caused power surges during startup.",
        testFindings: "Build quality is poor. The belt is thin and hard, becoming uncomfortable after just a few minutes. Stickers and plastic casing appear cheap, and the overall construction feels unsafe. Noise levels are surprisingly high for such a basic device, and the lack of any cushioning makes it rough on the joints. The remote is outdated, and while an app is sometimes required, it frequently crashes or fails to connect—rendering it nearly unusable for non-tech-savvy users.",
        specialFeature: "Its only real feature is a basic LCD display—insufficient to justify its flaws.",
        conclusion: "Our test makes it clear: the Kiddoza Walking Pad is unsuitable for home office use or regular training. Lack of safety, high noise levels, and poor comfort make it not recommended—even as a budget option."
      }
      
    },
    Superun: {
        image: '/images/superuntest.png',
        overallScore: 4.04,
        status: 'Passed',
      features: [
        'Wider deck and mid-tier motor suited for recreational joggers.',
        'Motorized incline with up to 12 levels for hill training.',
        'Sturdy frame with acceptable weight capacity and modern console.',
        'Digital controls with feedback on time, speed, and calories.',
        'Moderate cushioning and reliable handgrips for daily use.'
      ],
      tests: {
        Speed: {
          description: 'Superun delivers competitive speed performance with smooth acceleration. While it doesn\'t match elite models, it satisfies recreational and intermediate runners.',
          rating: '4.1 / 5',
          status: 'Passed',
          icon: Zap
        },
        Durability: {
          description: 'The frame and motor are sturdy enough for daily moderate use. Testers noted occasional belt slippage under heavier loads, but overall durability is solid.',
          rating: '4.0 / 5',
          status: 'Passed',
          icon: Shield
        },
        Incline: {
          description: 'Motorized incline adjusts well and adds value to interval and hill training. Superun includes up to 12 incline levels. Though not the fastest to transition, it remains accurate and dependable.',
          rating: '4.0 / 5',
          status: 'Passed',
          icon: TrendingUp
        },
        Noise: {
          description: 'Average noise profile—motor hum and foot impact are noticeable but manageable. Ideal for living rooms where minimal disruption is necessary.',
          rating: '3.9 / 5',
          status: 'Passed',
          icon: Volume2
        },
        Comfort: {
          description: 'Wide belt and user-friendly interface boost comfort. Cushioning supports longer use. Handrails and display are well-positioned.',
          rating: '4.2 / 5',
          status: 'Passed',
          icon: Heart
        }
      },
      individualReview: {
        title: 'Individual Review: Superun Raceable',
        modelName: 'Superun Raceable',
        verdict: 'Not Suitable for Office Use',
        rating: 2.0,
        publishDate: 'January 2025',
        author: 'Steve Austin',
        expertise: 'Certified Personal Trainer',
        testDuration: 'Extended testing',
        testCriteria: {
          'Design & Build Quality': {
            rating: 3,
            description: 'Sporty, but unstable at higher speeds'
          },
          'Noise Level': {
            rating: 2,
            description: 'Very loud with beeping and clacking sounds'
          },
          'Cushioning & Comfort': {
            rating: 3,
            description: 'Okay, but belt runs unevenly and jerks'
          },
          'Control': {
            rating: 2,
            description: 'Basic remote, often delayed; app unstable'
          },
          'Office Suitability': {
            rating: 2,
            description: 'Too loud and unstable for quiet environments'
          },
          'Value for Money': {
            rating: 2,
            description: 'Unconvincing due to various weaknesses'
          }
        },
        extras: [
          'Racing mode',
          'Multiplayer function'
        ],
        suitableFor: 'Gamified workouts for casual users—not for professional or office use',
        mainDescription: "The Superun Raceable stands out for its gamification features like racing and multiplayer modes, which initially seem exciting. However, in real-world use, it quickly becomes clear that this device is unsuitable for home office use.",
        testFindings: "Soon after setup, multiple issues appeared. The belt shifted sideways, needed frequent adjustment, and ran unevenly, which felt unsafe. The device was extremely loud, with beeping on startup and speed changes, plus clattering and grinding noises that worsened over time. The motor heated up significantly and emitted a noticeable plastic smell, making prolonged use risky. The remote was sluggish, and the app unstable, disrupting the training experience.",
        specialFeature: "Racing and multiplayer features may appeal to casual users, but they don't compensate for the serious functional drawbacks.",
        conclusion: "Due to its loud operation, unsteady motion, and awkward controls, the Superun Raceable is not recommended for office use or long sessions."
      }
      
    },
    Urevo: {
        image: '/images/urevotest.jpg',
        overallScore: 3.92,
        status: 'Passed',
      features: [
        'Foldable and compact Walkingpad for small spaces.',
        'Quiet motor optimized for walking and light jogging routines.',
        'User-friendly interface with touchscreen options.',
        'Manual incline system with basic elevation settings.',
        'Durable steel frame and reliable folding mechanism.'
      ],
      tests: {
        Speed: {
          description: 'Urevo supports brisk walks and moderate jogs. Speed levels suffice for entry to mid-level workouts. Controls are easy to adjust, and performance remains stable throughout sessions.',
          rating: '4.0 / 5',
          status: 'Passed',
          icon: Zap
        },
        Durability: {
          description: 'Steel frame resists minor impacts. While not industrial-grade, Urevo\'s components are dependable for their size class. Folding mechanism is strong and reliable.',
          rating: '4.1 / 5',
          status: 'Passed',
          icon: Shield
        },
        Incline: {
          description: 'Manual incline only in most models. Adjustment is simple but lacks flexibility for intense incline intervals. Suitable for basic elevation routines.',
          rating: '3.2 / 5',
          status: 'Limited',
          icon: TrendingUp
        },
        Noise: {
          description: 'Urevo runs quietly, with footstep noise slightly more audible on hard floors. Motor is efficient, producing limited hum during long sessions.',
          rating: '4.3 / 5',
          status: 'Passed',
          icon: Volume2
        },
        Comfort: {
          description: 'Compact deck but excellent surface grip. Console placement is thoughtful. Great for users with smaller frames. Not ideal for tall runners needing stride space.',
          rating: '4.0 / 5',
          status: 'Passed',
          icon: Heart
        }
      },
      individualReview: {
        title: 'Individual Review: UREVO Walking Pad',
        modelName: 'UREVO Walking Pad',
        verdict: 'Decent Budget Option for Short-Term Use',
        rating: 3.0,
        publishDate: 'January 2025',
        author: 'Steve Austin',
        expertise: 'Certified Personal Trainer',
        testDuration: 'Extended testing',
        testCriteria: {
          'Design & Build Quality': {
            rating: 3,
            description: 'Robust but bulkier than others'
          },
          'Noise Level': {
            rating: 3,
            description: 'Acceptable at walking speed, loud above 5 km/h with creaking and humming noises'
          },
          'Cushioning & Comfort': {
            rating: 3,
            description: 'Comfortable feel, but narrow surface wobbles at higher speeds'
          },
          'Control': {
            rating: 3,
            description: 'App + remote, setup is tricky, app unreliable, remote sluggish'
          },
          'Office Suitability': {
            rating: 2,
            description: 'Too loud for calls, overheats, not ideal for long sessions'
          },
          'Value for Money': {
            rating: 3,
            description: 'Affordable but limited durability and office suitability'
          }
        },
        extras: [
          'LED display',
          'Basic shock absorption'
        ],
        suitableFor: 'Short, occasional walking sessions at home',
        mainDescription: "The UREVO Walking Pad, weighing only 16.6 kg, is one of the lightest models and easy to transport or store. Despite its lightness, it offers a stable running surface with basic shock absorption, which is sufficient for short sessions.",
        testFindings: "However, at higher speeds, it becomes quite loud, making it less suitable for office use or video calls. Users also report it heats up over time and emits a plastic smell, making it unsuitable for extended use. The running surface is narrow and unstable at faster paces, which can be unsettling for taller users.",
        specialFeature: "App and remote control included, but both are unreliable during use.",
        conclusion: "It's a decent budget option for occasional, short use, but not ideal for regular office walking."
      }
      
    }
  };
  export default function TestingProcessPage() {
    const [activeBrand, setActiveBrand] = useState('Sportstech');
    const brandData = testData[activeBrand];
  
    const renderStars = (ratingStr) => {
      const rating = parseFloat(ratingStr);
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
      
      return (
        <div className="flex items-center">
          {[...Array(fullStars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
          ))}
          {hasHalfStar && <Star className="w-4 h-4 text-yellow-500 fill-current opacity-50" />}
          {[...Array(emptyStars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gray-300" />
          ))}
        </div>
      );
    };

    const getStatusColor = (status) => {
      switch(status) {
        case 'Passed': return 'text-green-600 bg-green-100';
        case 'Limited': return 'text-orange-600 bg-orange-100';
        default: return 'text-gray-600 bg-gray-100';
      }
    };
  
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section - Clean and Professional */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Testing Process
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert, <span className="font-semibold text-gray-900">Steve Austin</span>, evaluates Walkingpads to give you honest and thorough reviews.
              </p>
            </div>
    
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/images/trainer-1.jpg"
                  alt="Steve Austin"
                  className="rounded-lg shadow-lg w-96 h-96 object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    <strong className="text-gray-900">At WalkingpadReviews</strong>, we believe that choosing the right Walkingpad should be based on real testing—not just marketing claims. That's why we've enlisted our expert trainer, <strong className="text-gray-900">Steve Austin</strong>, to conduct hands-on evaluations of the top 5 Walkingpad brands in the industry.
                  </p>
                  <p className="text-gray-600">
                  In recent years, walking pads have become a regular feature in many households and offices. With more people working from home or spending long hours sitting, these compact Walkingpad devices make it easier to integrate movement into daily life without taking up much space. They are especially popular among those who want to stay active while working, helping to prevent posture problems and lack of exercise.
                  As part of our 2025 test, we thoroughly examined five current models. Key criteria included noise level, ease of use, stability, control options, and value for money. Of particular importance was the suitability for home office use, where low noise and simple operation are essential.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">Certification Process</span>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Every Walkingpad featured has passed our rigorous testing methodology and continues to perform excellently in real-world conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Brand Selection */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Brand-wise Test Analysis & Scores
            </h2>
            <p className="text-lg text-gray-600">
              Compare detailed test results across all categories
            </p>
          </div>

          {/* Brand Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 border ${
                  activeBrand === brand 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
  
          {brandData && (
            <div className="space-y-8">
              {/* Brand Overview Card */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">{activeBrand} Walkingpad Details</h2>
                    <div className="flex items-center space-x-4">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(brandData.status)}`}>
                        {brandData.status}
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="font-bold text-lg text-gray-900">{brandData.overallScore.toFixed(1)}/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex justify-center">
                      <img
                        src={brandData.image}
                        alt={`${activeBrand} Treadmill`}
                        className="rounded-lg shadow-md max-w-full h-auto"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                      {brandData.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Test Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(brandData.tests).map(([test, data]) => {
                  const IconComponent = data.icon;
                  return (
                    <div key={test} className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <IconComponent className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{test} Test</h3>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(data.status)}`}>
                            {data.status}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {data.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {renderStars(data.rating)}
                            <span className="text-sm text-gray-500">({data.rating})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Individual Review Section */}
              {brandData.individualReview && (
                <div className="mt-16 space-y-8">
                  {/* Review Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{brandData.individualReview.title}</h2>
                        <div className="flex items-center space-x-4 text-blue-100">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{brandData.individualReview.publishDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{brandData.individualReview.author}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                        <div className="flex items-center space-x-2">
                          <BadgeCheck className="w-5 h-5" />
                          <span className="font-bold text-lg">{brandData.individualReview.verdict}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Review Content */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Main Description */}
                      <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {brandData.individualReview.mainDescription}
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {brandData.individualReview.testFindings}
                        </p>
                        {brandData.individualReview.specialFeature && (
                          <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>{brandData.individualReview.specialFeature}</strong>
                          </p>
                        )}
                        <p className="text-gray-800 font-semibold">
                          {brandData.individualReview.conclusion}
                        </p>
                      </div>

                      {/* Test Criteria Table */}
                      {brandData.individualReview.testCriteria && (
                        <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Test Criteria</h3>
                          <div className="space-y-3">
                            {Object.entries(brandData.individualReview.testCriteria).map(([criteria, data]) => (
                              <div key={criteria} className="border-b border-gray-100 pb-3 last:border-0">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-semibold text-gray-900">{criteria}</h4>
                                    <p className="text-sm text-gray-600">{data.description}</p>
                                  </div>
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star 
                                        key={i} 
                                        className={`w-5 h-5 ${i < data.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Pros and Cons - for other brands */}
                      {brandData.individualReview.prosAndCons && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                            <h4 className="font-bold text-green-900 mb-4 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Pros
                            </h4>
                            <ul className="space-y-2">
                              {brandData.individualReview.prosAndCons.pros.map((pro, idx) => (
                                <li key={idx} className="flex items-start">
                                  <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                                  <span className="text-sm text-green-800">{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-red-50 rounded-lg border border-red-200 p-6">
                            <h4 className="font-bold text-red-900 mb-4 flex items-center">
                              <ChevronRight className="w-5 h-5 mr-2" />
                              Cons
                            </h4>
                            <ul className="space-y-2">
                              {brandData.individualReview.prosAndCons.cons.map((con, idx) => (
                                <li key={idx} className="flex items-start">
                                  <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                                  <span className="text-sm text-red-800">{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Highlights - for other brands */}
                      {brandData.individualReview.highlights && (
                        <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {brandData.individualReview.highlights.map((highlight, idx) => {
                              const HighlightIcon = highlight.icon;
                              return (
                                <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                                  <div className="inline-flex p-3 bg-blue-100 rounded-full mb-3">
                                    <HighlightIcon className="w-6 h-6 text-blue-600" />
                                  </div>
                                  <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                                  <p className="text-sm text-gray-600">{highlight.description}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column - Specifications & Extras */}
                    <div className="lg:col-span-1 space-y-6">
                      {/* Extras */}
                      {brandData.individualReview.extras && (
                        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                          <h3 className="text-lg font-bold text-blue-900 mb-3">Extras</h3>
                          <ul className="space-y-2">
                            {brandData.individualReview.extras.map((extra, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <Sparkles className="w-4 h-4 text-blue-600" />
                                <span className="text-blue-800">{extra}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Suitable For */}
                      {brandData.individualReview.suitableFor && (
                        <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                          <h3 className="text-lg font-bold text-green-900 mb-3">Suitable For</h3>
                          <p className="text-green-800">{brandData.individualReview.suitableFor}</p>
                        </div>
                      )}

                      {/* Specifications */}
                      {brandData.individualReview.specifications && (
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 sticky top-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Specifications</h3>
                          <dl className="space-y-3">
                            {Object.entries(brandData.individualReview.specifications).map(([key, value]) => (
                              <div key={key} className="border-b border-gray-200 pb-2 last:border-0">
                                <dt className="text-sm font-medium text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                                <dd className="text-sm font-semibold text-gray-900">{value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Detailed Findings - for other brands */}
                  {brandData.individualReview.detailedFindings && (
                    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Test Findings</h3>
                      <div className="space-y-6">
                        {Object.entries(brandData.individualReview.detailedFindings).map(([category, content]) => (
                          <div key={category} className="border-l-4 border-blue-500 pl-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 capitalize">{category}</h4>
                            <p className="text-gray-600 leading-relaxed">{content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom Line - for other brands */}
                  {brandData.individualReview.bottomLine && (
                    <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                      <div className="flex items-start space-x-3">
                        <Sparkles className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-bold text-blue-900 mb-2">The Bottom Line</h4>
                          <p className="text-blue-800 leading-relaxed">{brandData.individualReview.bottomLine}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Winner Section (only show for Sportstech) */}
              {activeBrand === 'Sportstech' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-green-900">Overall Test Winner: Sportstech</h4>
                      <p className="text-green-700">Highest overall score across all testing categories</p>
                    </div>
                  </div>
                  <p className="text-green-800 leading-relaxed">
                    After conducting comprehensive tests across all 5 brands, Sportstech emerged as the most balanced and high-performing Walkingpad, excelling in every category with an outstanding overall score of <strong>4.86/5</strong>.
                  </p><br/>
                  <p className="text-green-800 leading-relaxed">In the 2025 test, the sWalk Lite by Sportstech impressed in nearly every category. It combines a compact, high-quality design with quiet operation and user-friendly controls. For home office use, it offers the best overall package and is therefore our 2025 test winner.</p>
                  <p  className="text-green-800 leading-relaxed"><strong>Sportstech sWalk Lite</strong> – impresses with quiet operation, compact design, and high-quality build.</p>
                </div>
              )}

              {/* Buying Guide Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mt-12 border border-blue-200">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Buying Guide – What to Look For</h2>
                    <p className="text-lg text-gray-600">Essential features to consider when choosing your walking pad</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Height under 12 cm</h4>
                          <p className="text-sm text-gray-600">Essential for use under standing desks without interference</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Volume2 className="w-5 h-5 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Quiet motor (&lt; 60 dB)</h4>
                          <p className="text-sm text-gray-600">Critical for home office use and video calls</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Wifi className="w-5 h-5 text-purple-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">App + remote control</h4>
                          <p className="text-sm text-gray-600">Flexible operation without bending down during work</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <Heart className="w-5 h-5 text-orange-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Good cushioning & stable surface</h4>
                          <p className="text-sm text-gray-600">Protects joints during extended walking sessions</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 md:col-span-2">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <Shield className="w-5 h-5 text-red-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Warranty and reliable customer service</h4>
                          <p className="text-sm text-gray-600">Essential protection for your investment with responsive support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">Before buying, consider how often and in what environment the walking pad will be used.</strong> For daily office use, prioritize quiet operation and app control. For occasional home workouts, focus on stability and cushioning. Match your specific needs to the features that matter most for your lifestyle.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trainer Quote */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                <div className="flex items-start space-x-4">
                  <img
                    src="/images/trainer-1.jpg"
                    alt="Steve Austin"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <blockquote className="text-gray-700 italic mb-3 leading-relaxed">
                      "After testing hundreds of Walkingpads over my 12-year career, I can confidently say that the machines we recommend here represent the best value and performance in each category. Our testing methodology ensures that every aspect of usability, durability, and performance is thoroughly evaluated."
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">Steve Austin</div>
                      <div className="text-sm text-gray-600">Certified Personal Trainer, NASM</div>
                      <div className="text-sm text-gray-500">Tested: 18+ Walkingpads</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <FAQ />
      </div>
    );
  }