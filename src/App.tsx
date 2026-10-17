/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ArchitectureModal } from './components/ArchitectureModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import {
  ProjectConfiguratorModal,
  SavedInquiry,
} from './components/ProjectConfiguratorModal';
import { ClientInquiriesDrawer } from './components/ClientInquiriesDrawer';
import { HomeScreen } from './screens/HomeScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { WorkScreen } from './screens/WorkScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ContactScreen } from './screens/ContactScreen';
import { Project, Service } from './data/agencyData';

const STORAGE_KEY = 'fortrix_saved_inquiries';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [briefPreselectedService, setBriefPreselectedService] = useState<Service | null>(null);
  const [briefPreselectedProject, setBriefPreselectedProject] = useState<Project | null>(null);

  // Initialize saved inquiries from localStorage or with a demo quote
  const [savedInquiries, setSavedInquiries] = useState<SavedInquiry[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    return [
      {
        id: 'FTX-7821',
        timestamp: 'Oct 14, 2026',
        name: 'Enterprise Discovery',
        email: 'partner@acmelogic.com',
        company: 'Acme High-Performance Cloud',
        services: ['Web Development', 'Cloud & DevOps Architecture'],
        timeline: '4-8 weeks (MVP Sprint)',
        budget: '$30,000 – $60,000',
        description: 'Multi-region financial depth dashboard with WebSockets and sub-millisecond tick streaming.',
        estimatedSprints: 4,
        kickoffWindow: 'Direct Founder Immersion within 7-10 Days',
      },
    ];
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedInquiries));
    } catch (err) {
      console.warn('Failed to save to localStorage', err);
    }
  }, [savedInquiries]);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLetstalk = () => {
    setBriefPreselectedService(null);
    setBriefPreselectedProject(null);
    setIsConfiguratorOpen(true);
  };

  const handleSelectServiceForBrief = (service: Service) => {
    setBriefPreselectedService(service);
    setIsConfiguratorOpen(true);
  };

  const handleStartSimilarProject = (project: Project) => {
    setBriefPreselectedProject(project);
    setSelectedProject(null);
    setIsConfiguratorOpen(true);
  };

  const handleSaveInquiry = (inquiry: SavedInquiry) => {
    setSavedInquiries((prev) => [inquiry, ...prev]);
  };

  const handleDeleteInquiry = (id: string) => {
    setSavedInquiries((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0c0e10] text-[#e2e2e5] flex flex-col font-body-md selection:bg-[#b0f753] selection:text-[#102000]">
      {/* Fixed Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenLetstalk={handleOpenLetstalk}
        onOpenPortal={() => setIsPortalOpen(true)}
        savedInquiriesCount={savedInquiries.length}
      />

      {/* Main Content View Container */}
      <main className="w-full pt-20 flex-1 bg-[#0c0e10]">
        {currentView === 'home' && (
          <HomeScreen
            onOpenLetstalk={handleOpenLetstalk}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onSelectService={(srv) => setSelectedService(srv)}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'services' && (
          <ServicesScreen
            onSelectService={(srv) => setSelectedService(srv)}
            onOpenLetstalk={handleOpenLetstalk}
          />
        )}

        {currentView === 'work' && (
          <WorkScreen
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenLetstalk={handleOpenLetstalk}
          />
        )}

        {currentView === 'about' && (
          <AboutScreen onOpenLetstalk={handleOpenLetstalk} />
        )}

        {currentView === 'contact' && (
          <ContactScreen onSaveInquiry={handleSaveInquiry} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLetstalk={handleOpenLetstalk}
      />

      {/* Architecture Inspector Modal */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilarProject={handleStartSimilarProject}
      />

      {/* Capability Profile Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForBrief={handleSelectServiceForBrief}
      />

      {/* Project Configurator / "Start a Project" Modal */}
      <ProjectConfiguratorModal
        isOpen={isConfiguratorOpen}
        onClose={() => setIsConfiguratorOpen(false)}
        preselectedService={briefPreselectedService}
        preselectedProject={briefPreselectedProject}
        onSaveInquiry={handleSaveInquiry}
      />

      {/* Client Inquiries & Saved Proposals Drawer */}
      <ClientInquiriesDrawer
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        inquiries={savedInquiries}
        onNewProposal={() => {
          setIsPortalOpen(false);
          handleOpenLetstalk();
        }}
        onDeleteInquiry={handleDeleteInquiry}
      />
    </div>
  );
}
