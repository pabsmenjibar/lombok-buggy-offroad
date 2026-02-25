import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShieldAlert, RotateCw, Check, Star, DollarSign, Clock, Users, MapPin, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Instagram, Facebook, CalendarHeart, Anchor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const MagneticButton = ({ children, className = '', primary = false }) => {
    const btnRef = useRef(null);
    useEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;
        const xTo = gsap.quickTo(btn, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(btn, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const rotateTo = gsap.quickTo(btn, "rotation", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
            xTo(x); yTo(y); rotateTo(x * 0.1);
        };
        const handleMouseLeave = () => { xTo(0); yTo(0); rotateTo(0); };

        btn.addEventListener('mousemove', handleMouseMove);
        btn.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            btn.removeEventListener('mousemove', handleMouseMove);
            btn.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, []);

    const baseClasses = "relative overflow-hidden rounded-full inline-flex items-center justify-center font-sans font-medium transition-transform hover:-translate-y-[1px] group";
    const colorClasses = primary
        ? "bg-accent text-white px-8 py-4"
        : "bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 hover:border-white/40";

    return (
        <button ref={btnRef} className={`${baseClasses} ${colorClasses} ${className}`}>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none"></span>
        </button>
    );
}

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const navRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: "top -100",
                onUpdate: (self) => {
                    if (self.direction === 1) {
                        gsap.to(navRef.current, { backgroundColor: 'rgba(20, 20, 23, 0.8)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.1)', duration: 0.5, ease: 'power2.inOut' });
                    } else if (self.progress === 0) {
                        gsap.to(navRef.current, { backgroundColor: 'transparent', backdropFilter: 'blur(0px)', border: '1px solid transparent', duration: 0.5 });
                    }
                }
            });
        }, navRef);
        return () => ctx.revert();
    }, []);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
            <div ref={navRef} className="flex items-center justify-between px-6 py-4 rounded-full border border-transparent transition-all duration-500">
                <div className="font-sans font-bold text-xl tracking-tighter">L.A.T.E.</div>
                <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-white/70">
                    <a href="#expedition" className="hover:text-accent hover:-translate-y-[1px] transition-all">{t('nav.expeditions')}</a>
                    <a href="#pricing" className="hover:text-accent hover:-translate-y-[1px] transition-all">{t('nav.pricing')}</a>
                    <a href="#social-proof" className="hover:text-accent hover:-translate-y-[1px] transition-all">{t('nav.reviews')}</a>
                    <a href="#faq" className="hover:text-accent hover:-translate-y-[1px] transition-all">{t('nav.faq')}</a>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-2 text-xs font-mono text-white/50 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
                        <button onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'text-accent' : 'hover:text-white transition-colors'}>EN</button>
                        <button onClick={() => i18n.changeLanguage('es')} className={i18n.language === 'es' ? 'text-accent' : 'hover:text-white transition-colors'}>ES</button>
                        <button onClick={() => i18n.changeLanguage('id')} className={i18n.language === 'id' ? 'text-accent' : 'hover:text-white transition-colors'}>ID</button>
                    </div>
                    <MagneticButton primary className="text-sm px-6 py-3">{t('nav.bookNow')}</MagneticButton>
                </div>
            </div>
        </nav>
    )
}

const Hero = () => {
    const { t } = useTranslation();
    const comp = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-elem", {
                y: 100,
                opacity: 0,
                rotateX: -15,
                transformPerspective: 1000,
                stagger: { amount: 0.4 },
                duration: 1.8,
                ease: "expo.out",
                delay: 0.2
            });

            gsap.to(".hero-img", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: comp.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={comp} className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1517962140171-2dfc01caecb7?auto=format&fit=crop&q=80&w=2600"
                    alt="L.A.T.E. Off-road Buggy"
                    className="hero-img w-full h-[130%] -top-[15%] relative object-cover object-center brightness-75 grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                <div className="absolute inset-0 bg-primary/30"></div>
            </div>

            <div className="relative z-10 max-w-4xl pt-32">
                <div className="hero-elem font-mono text-accent text-sm md:text-base uppercase tracking-widest mb-6 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-accent"></span> {t('hero.premium')}
                </div>
                <h1 className="hero-elem leading-[0.9] flex flex-col mb-6">
                    <span className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter">{t('hero.conquer')}</span>
                    <span className="font-drama italic text-6xl md:text-8xl lg:text-9xl text-white mt-2 pr-4">{t('hero.inaccessible')}</span>
                </h1>
                <div className="hero-elem font-mono text-white/70 text-base md:text-lg mb-10 tracking-wide border-l-2 border-accent pl-4">
                    {t('hero.firstExperience')}
                </div>
                <div className="hero-elem flex flex-wrap items-center gap-6">
                    <MagneticButton primary>{t('hero.reserve')} <ArrowRight className="w-5 h-5" /></MagneticButton>
                    <div className="font-mono text-white/50 text-xs uppercase tracking-widest leading-relaxed">
                        {t('hero.certified')} <br /> {t('hero.location')}
                    </div>
                </div>
            </div>
        </section>
    )
}

const DiagnosticShuffler = () => {
    const { t } = useTranslation();
    const [order, setOrder] = useState([1, 2, 3]);

    useEffect(() => {
        const interval = setInterval(() => {
            setOrder(prev => {
                const newOrder = [...prev];
                const last = newOrder.pop();
                newOrder.unshift(last);
                return newOrder;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const data = {
        1: { title: t('shuffler.item1.title'), desc: t('shuffler.item1.desc') },
        2: { title: t('shuffler.item2.title'), desc: t('shuffler.item2.desc') },
        3: { title: t('shuffler.item3.title'), desc: t('shuffler.item3.desc') },
    };

    return (
        <div className="relative w-full h-[240px]">
            {order.map((id, i) => {
                const item = data[id];
                const scale = 1 - i * 0.05;
                const yOffset = i * 20;
                const opacity = 1 - i * 0.3;
                const zIndex = 30 - i;

                return (
                    <div
                        key={id}
                        className="absolute top-0 left-0 w-full bg-white/5 border border-white/10 p-6 rounded-[2rem] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] backdrop-blur-md"
                        style={{ transform: `translateY(${yOffset}px) scale(${scale})`, opacity, zIndex }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <h3 className="font-sans font-bold text-lg">{item.title}</h3>
                        </div>
                        <p className="font-mono text-sm text-white/60">{item.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

const TelemetryTypewriter = () => {
    const { t, i18n } = useTranslation();
    const [text, setText] = useState("");
    const [msgIdx, setMsgIdx] = useState(0);

    useEffect(() => {
        const msgs = [
            t('telemetry.msg1'),
            t('telemetry.msg2'),
            t('telemetry.msg3'),
            t('telemetry.msg4')
        ];
        let i = 0;
        const currentMsg = msgs[msgIdx];
        setText("");

        const typeInterval = setInterval(() => {
            setText(currentMsg.substring(0, i + 1));
            i++;
            if (i >= currentMsg.length) {
                clearInterval(typeInterval);
                setTimeout(() => setMsgIdx((prev) => (prev + 1) % msgs.length), 2000);
            }
        }, 50);
        return () => clearInterval(typeInterval);
    }, [msgIdx, i18n.language, t]);

    return (
        <div className="w-full h-full bg-[#0A0A0C] border border-white/10 rounded-[2rem] p-6 font-mono text-sm flex flex-col justify-between">
            <div className="flex justify-between items-center bg-white/5 px-4 py-2 rounded-full w-fit mb-6">
                <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/70">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    {t('telemetry.liveFeed')}
                </span>
            </div>
            <div className="flex-1 flex items-end pb-4">
                <div className="text-accent/90">
                    <span className="text-white/30 mr-2">{'>'}</span>{text}<span className="inline-block w-2 h-4 bg-accent ml-1 -mb-0.5 animate-pulse"></span>
                </div>
            </div>
        </div>
    )
}

const CursorScheduler = () => {
    const { t, i18n } = useTranslation();
    const [days, setDays] = useState(t('scheduler.days', { returnObjects: true }));

    useEffect(() => {
        setDays(t('scheduler.days', { returnObjects: true }));
    }, [i18n.language, t]);
    const [activeDay, setActiveDay] = useState(null);
    const containerRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            tl.set(cursorRef.current, { x: 200, y: 150, opacity: 0 });
            tl.to(cursorRef.current, { opacity: 1, duration: 0.3 });
            tl.to(cursorRef.current, { x: 120, y: 60, duration: 1, ease: 'power2.inOut' });
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.call(() => setActiveDay(2));
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
            tl.to(cursorRef.current, { x: 150, y: 155, duration: 0.8, ease: 'power2.inOut', delay: 0.5 });
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
            tl.to(cursorRef.current, { opacity: 0, duration: 0.3 });
            tl.call(() => setActiveDay(null));
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full bg-white/5 border border-white/10 rounded-[2rem] p-6 relative flex flex-col justify-between">
            <div className="grid grid-cols-7 gap-1 md:gap-2 mb-8 z-0">
                {days.map((d, i) => (
                    <div key={i} className={`h-8 md:h-10 rounded-lg flex items-center justify-center font-mono text-xs transition-colors duration-300 ${activeDay === i ? 'bg-accent text-white shadow-[0_0_15px_rgba(46,133,64,0.5)]' : 'bg-white/10 text-white/50'}`}>
                        {d}
                    </div>
                ))}
            </div>
            <div className="bg-white/10 py-3 rounded-xl text-center font-sans font-medium text-sm transition-colors z-0" style={{ backgroundColor: activeDay !== null ? 'rgba(46,133,64,0.1)' : '' }}>
                {t('scheduler.save')}
            </div>
            <div ref={cursorRef} className="absolute top-0 left-0 w-8 h-8 pointer-events-none z-20 drop-shadow-lg">
                <svg viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1" className="w-full h-full">
                    <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.82c.45 0 .67-.54.35-.85L6.35 2.85a.5.5 0 00-.85.35z" />
                </svg>
            </div>
        </div>
    )
}

const Features = () => {
    const { t } = useTranslation();
    return (
        <section id="safety" className="py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-sans font-bold text-3xl md:text-4xl mb-16 max-w-2xl">
                    {t('features.title1')} <br />
                    <span className="text-white/50">{t('features.title2')}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    <div className="flex flex-col gap-6">
                        <DiagnosticShuffler />
                        <div>
                            <h3 className="font-sans font-bold text-2xl mb-2">{t('features.card1Title')}</h3>
                            <p className="text-white/60 font-mono text-sm leading-relaxed">{t('features.card1Desc')}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="h-[240px]">
                            <TelemetryTypewriter />
                        </div>
                        <div>
                            <h3 className="font-sans font-bold text-2xl mb-2">{t('features.card2Title')}</h3>
                            <p className="text-white/60 font-mono text-sm leading-relaxed">{t('features.card2Desc')}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="h-[240px]">
                            <CursorScheduler />
                        </div>
                        <div>
                            <h3 className="font-sans font-bold text-2xl mb-2">{t('features.card3Title')}</h3>
                            <p className="text-white/60 font-mono text-sm leading-relaxed">{t('features.card3Desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Philosophy = () => {
    const { t, i18n } = useTranslation();
    const containerRef = useRef(null);
    const [statement1, setStatement1] = useState([]);
    const [statement2, setStatement2] = useState([]);

    useEffect(() => {
        setStatement1(t('philosophy.p1').split(" "));
        setStatement2(t('philosophy.p2').split(" "));
    }, [i18n.language, t]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-word", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });
            gsap.to(".parallax-bg", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: 150,
                ease: "none"
            });
        }, containerRef);
        return () => ctx.revert();
    }, [statement1, statement2]);

    return (
        <section ref={containerRef} className="relative py-48 px-6 md:px-12 lg:px-24 bg-[#0A0A0C] overflow-hidden flex items-center min-h-[80vh]">
            <img
                src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2600"
                alt="Texture"
                className="parallax-bg absolute inset-0 w-full h-[120%] object-cover opacity-10 scale-110 top-[-10%]"
            />
            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="mb-12">
                    {statement1.map((w, i) => <span key={`s1-${i}`} className="reveal-word inline-block mr-2 text-2xl md:text-3xl font-sans text-white/40">{w}</span>)}
                </div>
                <div>
                    {statement2.map((w, i) => <span key={`s2-${i}`} className="reveal-word inline-block mr-3 text-4xl md:text-7xl font-sans font-bold text-white">{w}</span>)}
                    <span className="reveal-word inline-block text-5xl md:text-8xl font-drama italic text-accent mt-2">{t('philosophy.p3')}</span>
                </div>
            </div>
        </section>
    )
}

const Protocol = () => {
    const { t } = useTranslation();

    const steps = [
        { num: '01', title: t('protocol.s1Title'), desc: t('protocol.s1Desc'), visualImg: 'https://images.unsplash.com/photo-1519021228607-ef6e4c22d821?auto=format&fit=crop&q=80&w=2600' },
        { num: '02', title: t('protocol.s2Title'), desc: t('protocol.s2Desc'), visualImg: 'https://images.unsplash.com/photo-1593616509132-785aa927f9c8?auto=format&fit=crop&q=80&w=2600' },
        { num: '03', title: t('protocol.s3Title'), desc: t('protocol.s3Desc'), visualImg: 'https://images.unsplash.com/photo-1520483937043-ff3d8ce309b5?auto=format&fit=crop&q=80&w=2600' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.stack-card-inner');
            cards.forEach((card, i) => {
                if (i < cards.length - 1) {
                    gsap.to(card, {
                        scrollTrigger: {
                            trigger: cards[i + 1],
                            start: "top bottom",
                            end: "top top",
                            scrub: true,
                        },
                        scale: 0.85,
                        opacity: 0.3,
                        rotationX: -5,
                        transformOrigin: "top center",
                        filter: "blur(30px)",
                    });
                }
            });
        });
        return () => ctx.revert();
    }, [steps]);

    return (
        <section id="protocol" className="relative w-full pb-24">
            <div className="pt-32 px-6 mb-12 max-w-7xl mx-auto">
                <h2 className="font-sans font-bold text-5xl md:text-6xl">{t('protocol.title')}</h2>
                <p className="font-mono text-white/50 mt-4 text-lg">{t('protocol.subtitle')}</p>
            </div>

            <div className="relative space-y-[20vh] md:space-y-0 pb-[30vh]">
                {steps.map((step, i) => (
                    <div key={i} className="md:h-screen w-full md:sticky md:top-0 flex items-center justify-center p-6">
                        <div className="stack-card-inner w-full max-w-6xl md:h-[70vh] aspect-[4/3] md:aspect-auto bg-primary rounded-[3rem] border border-white/10 p-8 md:p-24 flex flex-col justify-center relative shadow-2xl overflow-hidden">

                            <div className="absolute inset-0 z-0 pointer-events-none rounded-[3rem] overflow-hidden">
                                <img src={step.visualImg} alt={step.title} className="w-full h-full object-cover opacity-20 filter grayscale-[40%]" />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                                <div className="absolute inset-0 mix-blend-color opacity-30 bg-accent"></div>
                            </div>

                            <div className="relative z-10 w-full md:basis-1/2 mt-auto md:mt-0">
                                <div className="font-mono text-accent text-lg md:text-xl mb-4">{t('protocol.stepLabel')} {step.num}</div>
                                <h3 className="font-sans font-bold text-4xl md:text-7xl mb-4 md:mb-6">{step.title}</h3>
                                <p className="font-mono text-white/70 text-sm md:text-lg max-w-md">{step.desc}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const SocialProof = () => {
    const { t } = useTranslation();
    const reviews = [
        { name: "Sarah M.", country: "🇦🇺 Australia", text: "The secret beach alone made this the best activity of our entire Lombok trip. Our guide was incredible — professional, funny, and spoke perfect English. The local meal at the end was a genuine surprise. Already recommended it to everyone.", source: "TripAdvisor" },
        { name: "Marco & Giulia R.", country: "🇮🇹 Italy", text: "We did the couples sunset tour for our anniversary and it was absolutely magical. Private guide, perfectly timed sunset at the cliff viewpoint, and a beautiful dinner. Worth every single cent.", source: "Google" },
        { name: "Lena K.", country: "🇩🇪 Germany", text: "Eight of us booked the crew package and it was the undisputed highlight of the whole trip. The buggies are seriously powerful. The guides kept everyone safe and the whole group was buzzing for the rest of the day.", source: "Viator" },
        { name: "James T.", country: "🇬🇧 United Kingdom", text: "Best recommendation of the trip. The terrain is incredible, the buggies handle it perfectly, and our guide knew every hidden track on the island. Already planning to come back.", source: "TripAdvisor" },
        { name: "Christine B.", country: "🇨🇦 Canada", text: "Travelled with my two teenagers and was nervous about safety. The briefing, the equipment, and the guide made us all feel completely confident from minute one. Exceptional experience.", source: "GetYourGuide" }
    ];

    return (
        <section id="social-proof" className="py-32 px-6 md:px-12 lg:px-24 bg-[#0A0A0C]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6">{t('reviews.title')}</h2>
                    <div className="flex flex-wrap justify-center gap-6 font-mono text-sm text-white/70">
                        <div className="flex items-center gap-2"><Star className="w-4 h-4 text-accent fill-accent" /> 4.9/5 TripAdvisor</div>
                        <div className="flex items-center gap-2"><Star className="w-4 h-4 text-accent fill-accent" /> 4.9/5 Google</div>
                        <div className="flex items-center gap-2"><Star className="w-4 h-4 text-accent fill-accent" /> Top Rated GetYourGuide</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-white/20 transition-colors">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-accent fill-accent" />)}
                            </div>
                            <p className="font-mono text-sm leading-relaxed text-white/80 mb-8">"{r.text}"</p>
                            <div className="mt-auto border-t border-white/10 pt-6">
                                <div className="font-sans font-bold">{r.name} {r.country}</div>
                                <div className="font-mono text-xs text-white/50 mt-1">{t('reviews.verified')} · {r.source}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center flex flex-col items-center justify-center">
                    <p className="font-mono text-white/50 text-sm mb-6">{t('reviews.ready')}</p>
                    <MagneticButton primary className="text-lg px-8 py-4">{t('reviews.checkAvail')}</MagneticButton>
                </div>
            </div>
        </section>
    )
}

const Pricing = () => {
    const { t, i18n } = useTranslation();
    const [incItems, setIncItems] = useState([]);

    useEffect(() => {
        setIncItems(t('pricing.inc', { returnObjects: true }));
    }, [i18n.language, t]);

    return (
        <section id="pricing" className="py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6">{t('pricing.title')}</h2>
                    <p className="font-mono text-white/60">{t('pricing.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                    {/* Classic */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] relative overflow-hidden flex flex-col">
                        <div className="mb-8">
                            <div className="font-mono text-accent text-sm uppercase tracking-widest mb-4">{t('pricing.classicBadge')}</div>
                            <h3 className="font-sans font-bold text-4xl mb-2">{t('pricing.classicTitle')}</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl font-bold font-mono">{t('pricing.classicPrice')}</span>
                                <span className="text-white/50 font-mono text-sm">{t('pricing.classicSuffix')}</span>
                            </div>
                            <div className="flex items-center gap-6 font-mono text-sm text-white/70 mb-8 pb-8 border-b border-white/10">
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {t('pricing.classicTime1')}</span>
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {t('pricing.classicTime2')}</span>
                            </div>
                        </div>
                        <div className="flex-1 space-y-4 mb-10">
                            {[t('pricing.cList1'), t('pricing.cList2'), t('pricing.cList3'), t('pricing.cList4'), t('pricing.cList5')].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 font-mono text-sm text-white/80">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <MagneticButton>{t('pricing.bookClassic')}</MagneticButton>
                    </div>

                    {/* Couples Sunset (Premium) */}
                    <div className="bg-primary border border-accent/20 p-8 md:p-12 rounded-[3rem] relative overflow-hidden flex flex-col shadow-[0_0_40px_rgba(46,133,64,0.15)]">
                        <div className="absolute top-0 right-0 bg-accent text-white font-mono text-xs uppercase tracking-widest py-2 px-6 rounded-bl-2xl">{t('pricing.premiumExclusive')}</div>
                        <div className="mb-8">
                            <div className="font-mono text-accent text-sm uppercase tracking-widest mb-4">{t('pricing.premiumBadge')}</div>
                            <h3 className="font-sans font-bold text-4xl mb-2">{t('pricing.premiumTitle')}</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl font-bold font-mono">{t('pricing.premiumPrice')}</span>
                                <span className="text-white/50 font-mono text-sm">{t('pricing.premiumSuffix')}</span>
                            </div>
                            <div className="flex items-center gap-6 font-mono text-sm text-white/70 mb-8 pb-8 border-b border-white/10">
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {t('pricing.premiumTime1')}</span>
                                <span className="flex items-center gap-2"><Users className="w-4 h-4" /> {t('pricing.premiumTime2')}</span>
                            </div>
                        </div>
                        <div className="flex-1 space-y-4 mb-10">
                            {[t('pricing.pList1'), t('pricing.pList2'), t('pricing.pList3'), t('pricing.pList4'), t('pricing.pList5')].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 font-mono text-sm text-white/80">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <MagneticButton primary>{t('pricing.bookPremium')}</MagneticButton>
                    </div>

                </div>

                {/* Group Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex items-center justify-between">
                        <div>
                            <h4 className="font-sans font-bold text-2xl mb-2">{t('pricing.group4Title')}</h4>
                            <p className="font-mono text-white/50 text-sm mb-4">{t('pricing.group4Subtitle')}</p>
                            <div className="font-mono text-accent">{t('pricing.group4Save')}</div>
                        </div>
                        <div className="text-right">
                            <div className="font-mono font-bold text-3xl">{t('pricing.group4Price')} <span className="text-sm font-normal text-white/50 mt-1 block">{t('pricing.group4Suffix')}</span></div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex items-center justify-between">
                        <div>
                            <h4 className="font-sans font-bold text-2xl mb-2">{t('pricing.crew8Title')}</h4>
                            <p className="font-mono text-white/50 text-sm mb-4">{t('pricing.crew8Subtitle')}</p>
                            <div className="font-mono text-accent">{t('pricing.crew8Save')}</div>
                        </div>
                        <div className="text-right">
                            <div className="font-mono font-bold text-3xl">{t('pricing.crew8Price')} <span className="text-sm font-normal text-white/50 mt-1 block">{t('pricing.crew8Suffix')}</span></div>
                        </div>
                    </div>
                </div>

                {/* What's always included */}
                <div className="mt-16 bg-[#0A0A0C] border border-white/5 rounded-[3rem] p-8 md:p-12 text-center">
                    <h4 className="font-sans font-bold text-2xl mb-8">{t('pricing.includedTitle')}</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {incItems && incItems.map((item, i) => (
                            <span key={i} className="bg-white/10 px-4 py-2 rounded-full font-mono text-xs text-white/80">{item}</span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

const FAQ = () => {
    const { t } = useTranslation();
    const faqs = [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') },
        { q: t('faq.q4'), a: t('faq.a4') },
        { q: t('faq.q5'), a: t('faq.a5') },
        { q: t('faq.q6'), a: t('faq.a6') },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-sans font-bold text-4xl md:text-5xl mb-16 text-center">{t('faq.title')}</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 transition-colors hover:bg-white/10">
                            <button
                                className="w-full px-6 py-6 text-left flex justify-between items-center"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span className="font-sans font-medium text-lg pr-8">{faq.q}</span>
                                {openIndex === i ? <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-white/50 flex-shrink-0" />}
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="font-mono text-sm text-white/60 leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Location = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-1/3 relative z-10">
                    <div className="font-mono text-accent text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {t('location.badge')}
                    </div>
                    <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6">{t('location.city')}</h2>
                    <p className="font-mono text-white/70 text-sm md:text-base leading-relaxed mb-8">
                        {t('location.desc')}
                    </p>
                    <div className="space-y-4 font-mono text-sm text-white/50 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                            <p>{t('location.d1')}</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                            <p>{t('location.d2')}</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                            <p>{t('location.d3')}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <MagneticButton primary>{t('location.res')}</MagneticButton>
                        <MagneticButton>{t('location.dir')}</MagneticButton>
                    </div>
                </div>

                <div className="w-full lg:w-2/3 h-[500px] rounded-[3rem] overflow-hidden relative border border-white/10 shadow-[0_0_50px_rgba(46,133,64,0.1)] group">
                    {/* Interactive overlay on hover to simulate radar/tech feel */}
                    <div className="absolute inset-0 bg-transparent z-10 pointer-events-none group-hover:bg-accent/5 transition-colors duration-500"></div>
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-50 group-hover:animate-[scan_3s_ease-in-out_infinite] z-20"></div>

                    {/* Dark Mode Google Maps via CSS Filter hack (Inverts colors and adjusts hue to match dark theme) */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31526.46747587822!2d116.26252994082269!3d-8.892040030541783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcce2c4a923d2eb%3A0xe549dc2ca8ddc776!2sKuta%2C%20Pujut%2C%20Central%20Lombok%20Regency%2C%20West%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1717325234567!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) brightness(85%) contrast(120%) saturate(80%)' }}
                        allowFullScreen=""
                        loading="lazy"
                        className="absolute inset-0 z-0 bg-background"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    )
}

const Gallery = () => {
    const { t } = useTranslation();
    const images = [
        "https://images.unsplash.com/photo-1516950038693-c8fef9c796ed?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1533246696441-571a1d6d1281?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1578187218114-e14ccdab29ac?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1585785446573-218a2661e29d?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1589751301891-1bb9fa2e9cd5?auto=format&fit=crop&q=80&w=1200",
    ];

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
                <h2 className="font-sans font-bold text-4xl md:text-5xl">{t('gallery.title')}</h2>
                <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                        <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-white/5 transition-all"><ChevronLeft className="w-5 h-5" /></button>
                        <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-white/5 transition-all"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                </div>
            </div>
            <div className="relative max-w-[100vw]">
                <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
                    {images.map((img, i) => (
                        <div key={i} className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] h-[50vh] rounded-[2rem] overflow-hidden snap-center relative group flex-shrink-0">
                            <img src={img} alt="Buggy Tour Gallery" className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="w-full bg-primary pt-32 pb-12 px-6 md:px-12 lg:px-24 rounded-t-[4rem] border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                <div>
                    <h2 className="font-sans font-bold text-5xl mb-6">L.A.T.E.</h2>
                    <p className="font-mono text-white/50 max-w-sm mb-12">{t('footer.desc')}</p>
                    <MagneticButton primary>{t('hero.reserve')}</MagneticButton>
                </div>

                <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                    <div className="flex flex-col gap-4 text-white/70">
                        <h4 className="text-white font-bold font-sans text-lg mb-4">{t('footer.explore')}</h4>
                        <a href="#expedition" className="hover:text-accent transition-colors">{t('footer.rExp')}</a>
                        <a href="#pricing" className="hover:text-accent transition-colors">{t('footer.rPrice')}</a>
                        <a href="#social-proof" className="hover:text-accent transition-colors">{t('footer.rRev')}</a>
                    </div>
                    <div className="flex flex-col gap-4 text-white/70">
                        <h4 className="text-white font-bold font-sans text-lg mb-4">{t('footer.ops')}</h4>
                        <a href="#faq" className="hover:text-accent transition-colors">{t('footer.rFaq')}</a>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
                <div>© {new Date().getFullYear()} {t('footer.rights')}</div>
                <div className="flex items-center gap-2 uppercase tracking-widest text-accent">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    {t('footer.status')}
                </div>
            </div>
        </footer>
    )
}

export default function App() {
    return (
        <main className="bg-background min-h-screen text-text selection:bg-accent selection:text-white">
            <Navbar />
            <Hero />
            <Features />
            <Philosophy />
            <Protocol />
            <Pricing />
            <SocialProof />
            <Gallery />
            <Location />
            <FAQ />
            <Footer />
        </main>
    )
}
