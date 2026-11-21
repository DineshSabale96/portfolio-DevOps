// Single source of truth for the site AND the AI assistant. Edit here only.
export const profile = {
  name: 'Dinesh Vitthal Sabale',
  navName: 'Dinesh Sabale',
  role: 'DevOps & Cloud Engineer',
  headline: 'I build, automate, deploy and scale cloud-native applications.',
  description:
    'Passionate about DevOps, Cloud Infrastructure, Infrastructure as Code, Kubernetes, automation, CI/CD pipelines, and scalable cloud-native technologies.',
  location: 'Pune, Maharashtra, India',
  email: 'dineshvitthalsabale@gmail.com',
  phone: '+91 9169607007',
  github: 'https://github.com/DineshSabale96',
  linkedin: 'https://www.linkedin.com/in/dinesh-sabale/',
  resumeUrl: import.meta.env?.VITE_RESUME_URL || '/resume.pdf',
  about: [
    'I am an MCA (Cloud Computing) student with hands-on experience in DevOps engineering, Cloud infrastructure, automation, and containerized application deployment. I work with AWS, Azure, GCP, Terraform, Docker, Kubernetes, and CI/CD technologies to build scalable, reliable, and automated infrastructure.',
    'My technical interests include cloud-native architecture, Infrastructure as Code, DevOps automation, Kubernetes orchestration, Linux administration, monitoring, and deployment automation. I am looking for opportunities to grow as a DevOps and Cloud Engineer and contribute to real-world infrastructure and software delivery projects.',
  ],
}

export const skills = [
  { group: 'Cloud Platforms', icon: 'Cloud', items: ['AWS', 'Microsoft Azure', 'Google Cloud Platform (GCP)'] },
  { group: 'AWS Services', icon: 'Server', items: ['EC2', 'VPC', 'IAM', 'S3', 'ECS', 'EKS', 'RDS', 'Lambda', 'DynamoDB', 'Route 53', 'CloudWatch', 'ALB', 'NLB', 'Auto Scaling'] },
  { group: 'Azure Services', icon: 'Cloud', items: ['Azure Virtual Machines', 'Azure Virtual Network', 'Azure Kubernetes Service (AKS)', 'Azure Blob Storage', 'Microsoft Entra ID', 'Azure Monitor'] },
  { group: 'GCP Services', icon: 'Cloud', items: ['Compute Engine', 'Google Kubernetes Engine (GKE)', 'Cloud Storage', 'VPC', 'Cloud IAM', 'Cloud Monitoring'] },
  { group: 'Containers & Orchestration', icon: 'Container', items: ['Docker', 'Kubernetes', 'Amazon EKS', 'Google GKE', 'Helm'] },
  { group: 'Infrastructure as Code', icon: 'Blocks', items: ['Terraform'] },
  { group: 'CI/CD', icon: 'Workflow', items: ['Jenkins', 'GitHub Actions', 'GitLab CI/CD'] },
  { group: 'Monitoring & Logging', icon: 'Activity', items: ['Prometheus', 'Grafana', 'Amazon CloudWatch', 'CloudWatch Alarms'] },
  { group: 'Operating Systems', icon: 'Terminal', items: ['Linux', 'Ubuntu', 'Amazon Linux'] },
  { group: 'Programming & Scripting', icon: 'Code', items: ['Python', 'Bash', 'Shell Scripting'] },
  { group: 'Version Control', icon: 'GitBranch', items: ['Git', 'GitHub', 'GitLab'] },
  { group: 'Networking & Security', icon: 'Shield', items: ['VPC', 'Public & Private Subnets', 'Route Tables', 'Internet Gateway', 'NAT Gateway', 'VPN', 'VPC Peering', 'Security Groups', 'NACLs', 'IAM', 'RBAC', 'SSL/TLS', 'AWS Secrets Manager'] },
]

export const projects = [
  {
    name: 'Cloud Native Banking Microservices Platform',
    stack: ['AWS', 'Amazon EKS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'GitHub', 'Helm', 'Prometheus', 'Grafana'],
    description:
      'Designed and managed a cloud-native microservices platform for banking applications using Kubernetes on AWS. Automated application deployments through CI/CD pipelines and implemented monitoring, scaling, and high-availability practices.',
    points: [
      'Managed Amazon EKS cluster infrastructure.',
      'Designed Kubernetes infrastructure for microservices.',
      'Created Deployments, StatefulSets, Services, ConfigMaps, Secrets, Persistent Volumes, and Ingress Controllers.',
      'Built Docker images for application deployment.',
      'Automated deployments using Jenkins integrated with GitHub.',
      'Developed Helm charts for application packaging.',
      'Configured Horizontal Pod Autoscaler (HPA).',
      'Implemented rolling deployments and rollbacks.',
      'Integrated Prometheus and Grafana dashboards.',
      'Troubleshot application deployment and infrastructure issues.',
    ],
  },
  {
    name: 'Cloud-Based Healthcare Management System',
    stack: ['AWS', 'Terraform', 'GitLab CI/CD', 'Docker', 'Amazon ECS', 'Amazon EKS', 'AWS Lambda'],
    description:
      'Automated cloud infrastructure provisioning and application deployment for a healthcare management platform using Terraform and GitLab CI/CD across Development, QA, Staging, and Production environments.',
    points: [
      'Automated AWS infrastructure provisioning using Terraform.',
      'Developed reusable Terraform modules for multiple environments.',
      'Designed and maintained GitLab CI/CD pipelines.',
      'Configured GitLab Runners on AWS EC2.',
      'Implemented Docker-based deployment pipelines.',
      'Managed GitLab repositories, merge requests, and branching strategies.',
      'Provisioned AWS Lambda infrastructure using Terraform.',
      'Managed Amazon ECS and EKS deployments.',
      'Supported continuous integration and delivery workflows.',
    ],
  },
]

export const experience = [
  { title: 'CI/CD pipelines', points: ['Designed and maintained CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI/CD.'] },
  { title: 'Infrastructure as Code on AWS', points: [
    'Automated AWS infrastructure provisioning using Terraform.',
    'Provisioned and managed EC2, VPC, IAM, S3, RDS, DynamoDB, Lambda, ECS, EKS, Route 53, ALB, and NLB.',
  ] },
  { title: 'Containers and Kubernetes', points: [
    'Built Docker images and deployed applications on Amazon EKS.',
    'Managed Kubernetes Deployments, StatefulSets, DaemonSets, Services, ConfigMaps, Secrets, Jobs, CronJobs, Persistent Volumes, and Ingress Controllers.',
    'Implemented rolling updates, rollbacks, and HPA.',
    'Configured Kubernetes RBAC, Namespaces, Resource Quotas, and Network Policies.',
  ] },
  { title: 'Monitoring and operations', points: [
    'Implemented monitoring and alerting using CloudWatch, Prometheus, and Grafana.',
    'Performed Linux server administration, package management, user administration, permissions, services, and log analysis.',
    'Automated operational tasks using Bash scripts.',
  ] },
  { title: 'Cloud security and networking', points: [
    'Configured IAM policies, security groups, NACLs, SSL/TLS, and Secrets Manager.',
    'Managed AWS networking: VPC, subnets, route tables, gateways, NAT, VPN, and VPC peering.',
  ] },
  { title: 'Incident response and teamwork', points: [
    'Troubleshot infrastructure and application issues, performed Incident Management and Root Cause Analysis.',
    'Collaborated with Development, QA, Product, and Security teams following Agile/Scrum practices.',
  ] },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Savitribai Phule Pune University, Pune',
    period: '2024 – 2026',
    description: 'Specialization in Cloud Computing, focusing on leveraging cloud technologies to optimize and scale infrastructure for modern applications.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Shivaji University, Kolhapur',
    period: '2021 – 2024',
    description: 'Focused on computer science, software development, and IT systems, with foundational knowledge in programming, networking, databases, and web development.',
  },
  {
    degree: '12th Grade',
    school: 'Malojiraje Agriculture College & Jr. College, Phaltan',
    period: '2021',
    description: 'Completed 12th Grade with a focus on agriculture-related subjects, achieving an 83.00% score.',
  },
  {
    degree: '10th Grade',
    school: 'New English School, Surawadi',
    period: '2019',
    description: 'Completed 10th Grade with a general curriculum, achieving a 72.20% score.',
  },
]

export const certificationsIntro = 'Currently preparing for the following industry-recognized certifications:'
export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', status: 'Planned / In Preparation' },
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF / The Linux Foundation', status: 'Planned / In Preparation' },
  { name: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', status: 'Planned / In Preparation' },
]
