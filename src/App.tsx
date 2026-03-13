/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Wrench, 
  Droplets, 
  Settings, 
  Disc, 
  Car, 
  Cpu, 
  Filter, 
  Zap, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

// --- Constants ---
const WHATSAPP_URL = "https://wa.me/message/DGBDBNRK74G5E1";
const INSTAGRAM_URL = "https://www.instagram.com/centroautomotivoelshaday/";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Av.+das+Tulipas,+891+-+Sapucaias,+Contagem+-+MG,+32071-122";

const IMAGES = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoE5RvXD5ade5WSEImtH1ddKNq7pZQHT_jkXMPKW76unkYJQmsMaNIOlfxnqlTAHr7J--RkYNjVXbZKe7MMFkNQ6vrzEoK1FAZNI4U-XPXz5i-TIPFoaOdF0Efx5vFNAvYgJd6y0Q=s680-w680-h510-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqIuvcFyuabxRKQVZQYsL7wFHhY8UvaBL1G1e8nvpiel9C5JdGYsc6h6r0Cy8vaQDJWcgCcCuvz5KkPERgLzFPpEHpn4L4KahUzZRPZHwj05RjrK98brbTKiiDmWUjiHD2cstPZXw=s680-w680-h510-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPy1a_r3RSGEKDS3MWWAXo-9kLqpf3C_UrLzPRx=s680-w680-h510-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOvNYz2a8zSAIhAnu2MR9R04aOWf56zVW8tB5Ie=s680-w680-h510-rw",
];

const SERVICES = [
  { id: 1, name: "Mecânica Geral", icon: Wrench, desc: "Manutenção completa de motores e sistemas mecânicos." },
  { id: 2, name: "Troca de Óleo", icon: Droplets, desc: "Lubrificação de alta performance para maior vida útil do motor." },
  { id: 3, name: "Correia Dentada", icon: Settings, desc: "Substituição preventiva para evitar danos graves ao motor." },
  { id: 4, name: "Pastilhas de Freio", icon: Disc, desc: "Segurança total com verificação e troca de sistemas de frenagem." },
  { id: 5, name: "Suspensão", icon: Car, desc: "Estabilidade e conforto com revisão de amortecedores e buchas." },
  { id: 6, name: "Motor", icon: Cpu, desc: "Retífica, diagnóstico e reparos especializados em motores." },
  { id: 7, name: "Filtros", icon: Filter, desc: "Troca de filtros de ar, óleo e combustível para eficiência máxima." },
  { id: 8, name: "Limpeza de Bico", icon: Zap, desc: "Otimização da injeção eletrônica e economia de combustível." },
  { id: 9, name: "Rastreador", icon: MapPin, desc: "Instalação profissional de sistemas de rastreamento e segurança." },
];

const TESTIMONIALS = [
  { name: "Cliente Satisfeito", text: "Serviço de primeira, equipe nota 10/10 preço bom recomendo com certeza.", rating: 5 },
  { name: "Motorista Local", text: "Galera boa de mexer, preços atrativos e muita seriedade.", rating: 5 },
  { name: "Usuário Google", text: "Mostram tudo que estão fazendo no carro e sempre respondem.", rating: 5 },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex flex-col">
            <span className="text-xl font-display font-black tracking-tighter uppercase leading-none">
              El Shaday
            </span>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] leading-none mt-1">
              Centro Automotivo
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-dark px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-display uppercase tracking-widest hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-grid scanline">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {IMAGES.slice(0, 4).map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ 
              opacity: currentImg === idx ? 0.3 : 0,
              scale: currentImg === idx ? 1 : 1.2
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/80 to-brand-dark" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="flex text-white">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />)}
            </div>
            <div className="h-px w-12 bg-white/20" />
            <span className="text-xs font-mono text-white/60 uppercase tracking-[0.3em]">
              Avaliação 5.0 • 110 Comentários
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.85] mb-10 uppercase italic text-gradient">
            Performance <br />
            <span className="text-white cyan-glow">Sem Limites</span>
          </h1>
          
          <p className="text-xl text-white/60 mb-12 font-light leading-relaxed max-w-xl border-l-2 border-white/30 pl-8">
            Oficina mecânica especializada em atendimento de urgência e manutenção completa. Tecnologia de ponta para quem não aceita menos que a perfeição.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#servicos" 
              className="group bg-white text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Ver Serviços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white/20 transition-all"
            >
              Agendar Agora
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="glass p-6 rounded-2xl flex items-center gap-4 animate-bounce">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
            <ShieldCheck className="text-green-500" />
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest">Garantia de</p>
            <p className="font-display font-bold">Qualidade Total</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-brand-surface relative overflow-hidden bg-grid">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-dark to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 relative z-10">
            <img 
              src={IMAGES[2]} 
              alt="Oficina" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[2rem] z-20 border-white/20 cyan-border-glow">
            <p className="text-6xl font-display font-black text-white leading-none mb-2">23+</p>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono">Anos de Inovação</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-white/40" />
            <span className="text-white/60 font-mono text-xs uppercase tracking-[0.4em]">DNA Tecnológico</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black mb-10 leading-[0.9] uppercase italic">
            Tradição que <br /> <span className="text-white/80">Evolui</span>
          </h2>
          <p className="text-white/50 text-xl mb-12 leading-relaxed font-light">
            Desde 2000, o Centro Automotivo El Shaday é referência em Contagem. Unimos a experiência de décadas com o que há de mais moderno em diagnóstico computadorizado para veículos nacionais e importados.
          </p>

          <div className="grid gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10 }}
                className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 hover:border-white/30 transition-all duration-500 group"
              >
                <div className="flex gap-1 text-white mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-white/80 mb-4 text-lg font-light leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-white/20" />
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicos" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-white/20" />
            <span className="text-white/60 font-mono text-xs uppercase tracking-[0.5em]">Expertise Automotiva</span>
            <div className="h-px w-12 bg-white/20" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-black uppercase italic text-gradient"
          >
            Serviços de <span className="text-white cyan-glow">Alta Precisão</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-brand-surface p-10 rounded-[2.5rem] border border-white/5 hover:border-white/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                <s.icon size={160} />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <s.icon className="text-white group-hover:text-brand-dark transition-colors duration-500" size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-white transition-colors duration-500 uppercase tracking-tight italic">
                  {s.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-500 font-light">
                  {s.desc}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[10px] font-mono uppercase tracking-widest">Saiba Mais</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="galeria" className="py-32 bg-brand-surface relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-white/40" />
              <span className="text-white/60 font-mono text-xs uppercase tracking-[0.4em]">Visual Experience</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase italic text-gradient">
              Nossa <span className="text-white cyan-glow">Oficina</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-md text-right hidden md:block font-light leading-relaxed">
            Confira a excelência em cada detalhe. Nossa estrutura é projetada para oferecer o melhor cuidado para seu veículo.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative group rounded-[2rem] overflow-hidden cursor-pointer border border-white/5"
            >
              <img 
                src={img} 
                alt={`Trabalho ${i}`} 
                className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center">
                    <ArrowRight size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest">Ver Detalhes</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-grid-cyan opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-white/40" />
              <span className="text-white/60 font-mono text-xs uppercase tracking-[0.4em]">Conexão Direta</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-16 uppercase italic text-gradient">
              Pronto para o <br /> <span className="text-white cyan-glow">Check-up?</span>
            </h2>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-white/[0.03] rounded-[1.5rem] flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-[0.3em] text-[10px] text-white/30 mb-3 font-mono">Localização</h4>
                  <p className="text-xl font-light text-white/80">Av. das Tulipas, 891 - Sapucaias, Contagem - MG</p>
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-white text-xs flex items-center gap-2 mt-4 hover:gap-3 transition-all">
                    Abrir no Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="mt-12 rounded-[2rem] overflow-hidden border border-white/10 h-64 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.463234909875!2d-44.0927777!3d-19.9048333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6966144e55555%3A0x5555555555555555!2sAv.%20das%20Tulipas%2C%20891%20-%20Sapucaias%2C%20Contagem%20-%20MG%2C%2032071-122!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-white/[0.03] rounded-[1.5rem] flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-[0.3em] text-[10px] text-white/30 mb-3 font-mono">Contato</h4>
                  <p className="text-xl font-light text-white/80">(31) 97357-5519</p>
                  <div className="flex gap-6 mt-4">
                    <a href="tel:31973575519" className="text-white text-xs uppercase tracking-widest hover:underline">Ligar</a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white text-xs uppercase tracking-widest hover:underline">WhatsApp</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-white/[0.03] rounded-[1.5rem] flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-[0.3em] text-[10px] text-white/30 mb-3 font-mono">Disponibilidade</h4>
                  <div className="space-y-1">
                    <p className="text-xl font-light text-white/80">Seg a Sex: 08h às 18h</p>
                    <p className="text-xl font-light text-white/80">Sáb: 08h às 13h</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full" />
            <div className="relative bg-brand-surface p-12 rounded-[3rem] border border-white/5 shadow-2xl">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono ml-1">Nome Completo</label>
                    <input type="text" className="w-full bg-brand-dark/50 border border-white/5 rounded-2xl px-6 py-4 focus:border-white outline-none transition-all duration-500 text-white placeholder:text-white/10" placeholder="Ex: João Silva" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono ml-1">E-mail</label>
                    <input type="email" className="w-full bg-brand-dark/50 border border-white/5 rounded-2xl px-6 py-4 focus:border-white outline-none transition-all duration-500 text-white placeholder:text-white/10" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono ml-1">Mensagem</label>
                  <textarea rows={4} className="w-full bg-brand-dark/50 border border-white/5 rounded-2xl px-6 py-4 focus:border-white outline-none transition-all duration-500 text-white placeholder:text-white/10 resize-none" placeholder="Como podemos ajudar seu veículo hoje?"></textarea>
                </div>
                <button className="group w-full bg-white text-brand-dark py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3">
                  Enviar Solicitação
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-brand-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-display font-bold tracking-tighter uppercase">
                El Shaday <span className="text-white/60">Auto</span>
              </span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Excelência em manutenção automotiva em Contagem. Compromisso com a sua segurança e a performance do seu veículo.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-6">Social</h4>
            <div className="flex gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 uppercase tracking-widest font-mono">
          <p>© {new Date().getFullYear()} El Shaday Centro Automotivo. Todos os direitos reservados.</p>
          <p>Desenvolvido com tecnologia de ponta</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.4)] flex items-center justify-center"
  >
    <MessageCircle size={32} />
  </motion.a>
);

export default function App() {
  return (
    <div className="bg-brand-dark min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
