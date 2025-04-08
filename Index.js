import React from "react";
import { Github, Linkedin } from "lucide-react";
import { Globe } from "lucide-react";
import { SiStackoverflow } from "react-icons/si";

export default function PortfolioLandingPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16 font-sans">
      {/* Intro Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-extrabold mb-4">Hi, I'm <span className="text-black">Najeeb.</span></h1>
        <p className="text-xl text-gray-600 mb-4 italic">Crafting beautiful and scalable iOS experiences.</p>
        <p className="max-w-2xl text-md text-gray-700 mb-10 leading-relaxed">
          I’m a seasoned iOS engineer with over 7 years of experience designing, developing, and optimizing high-performance applications across industries such as Banking, Healthcare, Education, and Streaming. Expert in Swift, Objective-C, modular architecture, CI/CD automation, and scalable, maintainable codebases.
        </p>
        <div className="flex space-x-6">
          <a href="https://github.com/najeeb-ur-rehman" target="_blank" rel="noopener noreferrer"
            className="p-2 border rounded-full hover:bg-gray-100 transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/najeeb-ur-rehman" target="_blank" rel="noopener noreferrer"
            className="p-2 border rounded-full hover:bg-gray-100 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://stackoverflow.com/users/9769043/najeeb" target="_blank" rel="noopener noreferrer"
            className="p-2 border rounded-full hover:bg-gray-100 transition">
            <SiStackoverflow className="w-6 h-6" />
          </a>
        </div>
        <div className="absolute bottom-10 animate-bounce text-gray-500">
          <span className="text-xs tracking-widest">scroll down</span>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-8 border-b pb-2">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          <li>Swift, SwiftUI, Objective-C</li>
          <li>MVVM, VIP, MVC, DI</li>
          <li>UIKit, Core Animation, BLE</li>
          <li>REST APIs, Firebase, CoreData</li>
          <li>CI/CD (Jenkins, GitHub Actions)</li>
          <li>Testing (XCTest, SonarCloud)</li>
          <li>SPM, CocoaPods, Git Submodules</li>
          <li>AutoLayout, Localization, RxSwift</li>
          <li>Agile/Scrum, Jira</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-8 border-b pb-2">Projects</h2>
        <div className="space-y-8 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold">Peacock, SkyShowtime, SkyShowmax (Streaming)</h3>
            <p className="mt-1">Developed and enhanced tvOS apps at Sky Portugal, focusing on modular VIP architecture, player experience, and CI/CD automation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">YAP (Fintech / Digital Banking)</h3>
            <p className="mt-1">Built scalable wallet features with Swift, RxSwift, MVVM-C, and modular CocoaPods. Designed responsive UI and ensured high test coverage.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">ATHAN (Prayer Times, Quran Audio)</h3>
            <p className="mt-1">Led feature development and stability improvements, adding background Quran playback, localizations, and reducing crash rates.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Kustomer iOS SDK (CRM - Meta Acquired)</h3>
            <p className="mt-1">Enhanced chat SDK performance, added modular design, and ensured scalability for enterprise-level integrations.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Tespo Health, WorkReady, Trucker’s Digest</h3>
            <p className="mt-1">Delivered cross-industry mobile solutions with BLE integration, educational tools, and social connectivity features.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Najeeb. All rights reserved.
      </footer>
    </main>
  );
}
