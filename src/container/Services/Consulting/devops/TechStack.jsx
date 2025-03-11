"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const categories = [
  {
    name: "INFRASTRUCTURE AS CODE (IAC)",
    tools: [
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "AWS CDK", icon: "https://icon.icepanel.io/AWS/svg/Developer-Tools/Cloud-Development-Kit.svg" },
      { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
      { name: "Pulumi", icon: "https://www.pulumi.com/logos/brand/avatar-on-white.svg" },
      { name: "CloudFormation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Chef", icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflyclipart.com%2Fthumbs%2Fchef-introduces-compliance-tools-chef-devops-logo-1644331.png&f=1&nofb=1&ipt=ea398effaacfe90230aa30da66f7316b072cbd179d3abf7f1d8193947e1b3051&ipo=images" },
      { name: "Puppet", icon: "https://www.svgrepo.com/show/354226/puppet.svg" },
      { name: "Crossplane", icon: "https://logowik.com/content/uploads/images/crossplane-icon3982.logowik.com.webp" },
      { name: "Serverless", icon: "https://assets.website-files.com/60acbb950c4d6606963e1fed/60acbb950c4d66259e3e2010_logo-serverless-dark.svg" }
    ],
  },
  {
    name: "CI/CD",
    tools: [
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "GitLab CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "CircleCI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" },
      { name: "Travis CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "TeamCity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg" },
      { name: "Bamboo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atlassian/atlassian-original.svg" },
      { name: "GoCD", icon: "https://gocd.org/assets/images/go-logo-white.svg" }
    ],
  },
  {
    name: "CONTAINERIZATION",
    tools: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Portainer", icon: "https://www.portainer.io/hubfs/portainer-logo-black.svg" },
      { name: "Podman", icon: "https://cdn.worldvectorlogo.com/logos/podman.svg" },
      { name: "OpenShift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg" },
      { name: "Rancher", icon: "https://ranchermanager.docs.rancher.com/assets/images/rancher-logo-horiz-color-1.png" },
      { name: "Docker Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" },
      { name: "Helm", icon: "https://helm.sh/img/helm.svg" },
      { name: "Docker Swarm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" }
    ],
  },
  {
    name: "MONITORING AND OBSERVABILITY",
    tools: [
      { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "Datadog", icon: "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg" },
      { name: "New Relic", icon: "https://newrelic.com/themes/custom/erno/assets/mediakit/new_relic_logo_vertical.svg" },
      { name: "Nagios", icon: "https://www.vectorlogo.zone/logos/nagios/nagios-icon.svg" },
      { name: "ELK Stack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
      { name: "Dynatrace", icon: "https://www.vectorlogo.zone/logos/dynatrace/dynatrace-icon.svg" },
      { name: "Zabbix", icon: "https://www.vectorlogo.zone/logos/zabbix/zabbix-icon.svg" },
      { name: "Splunk", icon: "https://www.splunk.com/content/dam/splunk-blogs/images/2017/02/splunk-logo.png" }
    ],
  },
  {
    name: "SECRET MANAGEMENT",
    tools: [
      { name: "HashiCorp Vault", icon: "https://www.vectorlogo.zone/logos/vaultproject/vaultproject-icon.svg" },
      { name: "AWS Secrets Manager", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Azure Key Vault", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg" },
      { name: "Google Secret Manager", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Bitwarden", icon: "https://www.vectorlogo.zone/logos/bitwarden/bitwarden-icon.svg" },
      { name: "CyberArk", icon: "https://www.cyberark.com/wp-content/uploads/2019/06/cyberark-favicon.png" },
      { name: "1Password", icon: "https://www.vectorlogo.zone/logos/1password/1password-icon.svg" },
      { name: "LastPass", icon: "https://www.vectorlogo.zone/logos/lastpass/lastpass-icon.svg" },
      { name: "KeePass", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b0/KeePass_icon.svg" }
    ],
  },
  {
    name: "DEVOPS AUTOMATION PLATFORM",
    tools: [
      { name: "Ansible Tower", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg" },
      { name: "Puppet Enterprise", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppet/puppet-original-wordmark.svg" },
      { name: "Terraform Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg" },
      { name: "AWS OpsWorks", icon: "https://d1.awsstatic.com/icons/console/opsworks/OpsWorks_Chef.d19d8fea83d91839b93b9a5da7c87191ef79d236.png" },
      { name: "Octopus Deploy", icon: "https://www.vectorlogo.zone/logos/octopus-deploy/octopus-deploy-icon.svg" },
      { name: "Spinnaker", icon: "https://www.vectorlogo.zone/logos/spinnakerio/spinnakerio-icon.svg" },
      { name: "Jenkins X", icon: "https://raw.githubusercontent.com/cdfoundation/artwork/main/jenkinsx/icon/color/jenkinsx-icon-color.svg" },
      { name: "Azure Automation", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
      { name: "Chef Automate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chef/chef-original-wordmark.svg" }
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0);

  // Fallback icon in case any icon URL fails to load
  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"; // Generic dev icon as fallback
  };

  return (
    <WrapperContainer>
      <div className="mx-auto px-6">
        <Heading>Tech Stack</Heading>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 space-y-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                whileHover={{ x: 10, scale: 1.05 }}
                onClick={() => setActiveCategory(index)}
                className={`p-6 rounded-lg cursor-pointer transition-all transform ${
                  index === activeCategory
                    ? "bg-white shadow-lg border-l-4 border-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    index === activeCategory ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {category.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="col-span-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            <div className="grid grid-cols-3 gap-6">
              {categories[activeCategory].tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all transform"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-50 rounded-full p-2">
                    <img
                      src={tool.icon}
                      alt={`${tool.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={handleImageError}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default TechStack;