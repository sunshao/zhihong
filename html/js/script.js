// ========== Data ==========
const siteConfig = {
	name: "智泓创芯",
	fullName: "上海智泓创芯科技有限公司",
	slogan: "智能工业质检解决方案",
	contact: {
		address: "山东省淄博市张店区和平街道办事处南西六路21号淄博市创业孵化中心A座13层",
		phone: "138-0000-0000",
		email: "contact@zhihong.com"
	}
};

const advantages = [
	{
		title: "领先的工业AI视觉算法",
		desc: "基于自研深度学习框架，融合传统视觉与前沿模型，针对微小缺陷、复杂背景等场景优化，在电子、汽车、包装等行业实现超高精度、高鲁棒性检测。"
	},
	{
		title: "全栈自研的软硬件系统",
		desc: "提供从光学成像、采集控制、边缘计算到算法平台的全栈自主方案，确保在高洁、震动、反光等严苛环境下稳定运行，实现软件与硬件的深度协同。"
	},
	{
		title: "深耕行业的场景化方案",
		desc: "源于电子制造、汽车制造、食品包装、陶瓷质检、烟草生产等多个行业的深度实践，具备对工艺、节拍与缺陷的深刻理解，提供精准、可落地的场景化设计。"
	},
	{
		title: "标准化可扩展的部署架构",
		desc: "采用模块化、容器化设计，支持算法快速迭代、任务灵活配置与系统平滑扩容，提供从快速验证、规模化部署到持续运维的全流程服务，助力企业高效实现智能化升级。"
	}
];

const solutions = [
	{
		id: "industrial",
		title: "工业制造",
		image: "https://via.placeholder.com/400x300/003366/ffffff?text=Industrial",
		desc: "针对3C电子、家电、五金等外观、尺寸、装配缺陷的自动化检测。"
	},
	{
		id: "auto",
		title: "汽车制造",
		image: "https://via.placeholder.com/400x300/003399/ffffff?text=Automotive",
		desc: "针对汽车制造中外观、漆面、涂胶等关键环节的自动化检测需求。"
	},
	{
		id: "food",
		title: "食品包装",
		image: "https://via.placeholder.com/400x300/0033cc/ffffff?text=Food",
		desc: "适用千高速产线，解决食品包装的破损、漏油等缺陷在线检测难题。"
	},
	{
		id: "tobacco",
		title: "烟草工业",
		image: "https://via.placeholder.com/400x300/003f99/ffffff?text=Tobacco",
		desc: "覆盖制丝、卷包等工艺段，解决烟包变形、设备堵料、虫害监测等问题。"
	},
	{
		id: "leather",
		title: "皮革纺织",
		image: "https://via.placeholder.com/400x300/004466/ffffff?text=Leather",
		desc: "针对牛皮表面的色差、刀伤等多种缺陷，解决人工检测速度慢、易漏检痛点。"
	}
];

const cases = [
	{
		id: "pcb",
		title: "电子板缺陷检测",
		category: "工业制造",
		image: "https://via.placeholder.com/400x300/004466/ffffff?text=PCB",
		desc: "针对高精度PCB板，解决多层、微缺等微小缺陷在线检测难题。通过3D线阵视觉与深度学习算法融合，实现95%以上检出率。"
	},
	{
		id: "car-vision",
		title: "汽车视觉检测系统",
		category: "汽车制造",
		image: "https://via.placeholder.com/400x300/004499/ffffff?text=Automotive",
		desc: "针对整车制造中外观、漆面、涂胶等关键环节的自动化检测需求。"
	},
	{
		id: "ceramic",
		title: "陶瓷外观缺陷检测",
		category: "工业制造",
		image: "https://via.placeholder.com/400x300/0044cc/ffffff?text=Ceramic",
		desc: "针对陶瓷杯体表面的孔洞、色脏、堆釉等多种复杂缺陷，解决人工检测标准不一的问题。"
	},
	{
		id: "food-pack",
		title: "食品包装视觉检测",
		category: "食品包装",
		image: "https://via.placeholder.com/400x300/004d99/ffffff?text=Food+Pack",
		desc: "适用千高速产线，解决食品包装的破损、漏油等缺陷在线检测难题。"
	},
	{
		id: "tobacco-monitor",
		title: "卷烟厂智能监控系统",
		category: "烟草工业",
		image: "https://via.placeholder.com/400x300/004d66/ffffff?text=Tobacco",
		desc: "覆盖制丝、卷包等工艺段，解决烟包变形、设备堵料等问题。"
	},
	{
		id: "leather-surface",
		title: "牛皮表面缺陷检测",
		category: "皮革纺织",
		image: "https://via.placeholder.com/400x300/005599/ffffff?text=Leather",
		desc: "针对牛皮表面的色差、刀伤等多种缺陷，实现快速定位与分类。"
	}
];

const aboutData = {
	intro: "智泓创芯致力于为广泛行业提供软硬件深度融合的智能检测方案。通过创新的AI视觉技术，不仅赋能产业实现产品质量检测的自动化、智能化升级，显著提升生产效率与产品良率，更能帮助企业降低综合生产成本，优化人员配置，并通过对生产环境与操作的智能监控，从源头上促进安全生产与管理。",
	history: "公司在上海与山东设立了两个研发中心。上海中心侧重于前沿算法研究与新方案孵化；山东中心则聚焦于工程化落地与产业化应用。双中心协同，构建了从技术创新到场景交付的完整闭环。",
	team: "公司拥有一支20余人的精干团队，其中超过70%为研发与技术人员。核心成员均具备深厚的机器视觉、人工智能及工业自动化背景，确保了技术的前瞻性与项目的交付质量。",
	vision: "不断技术创新与坚守，领航工业AI视觉检测时代"
};

// ========== Carousel State ==========
let currentSlide = 0;
const totalSlides = 4;

// ========== Carousel Functions ==========
function showSlide(n) {
	const slides = document.querySelectorAll('.carousel-slide');
	const dots = document.querySelectorAll('.dot');

	if (n >= totalSlides) currentSlide = 0;
	if (n < 0) currentSlide = totalSlides - 1;

	slides.forEach(slide => slide.classList.remove('active'));
	dots.forEach(dot => dot.classList.remove('active'));

	if (slides[currentSlide]) {
		slides[currentSlide].classList.add('active');
	}
	if (dots[currentSlide]) {
		dots[currentSlide].classList.add('active');
	}
}

function nextSlide() {
	currentSlide++;
	showSlide(currentSlide);
}

function prevSlide() {
	currentSlide--;
	showSlide(currentSlide);
}

function goToSlide(n) {
	currentSlide = n;
	showSlide(currentSlide);
}

// ========== Render Functions ==========
function renderAdvantages() {
	const container = document.getElementById('advantagesContainer');
	if (!container) return;

	container.innerHTML = advantages.map(adv => `
        <div class="advantage-card">
            <h3>${adv.title}</h3>
            <p>${adv.desc}</p>
        </div>
    `).join('');
}

function renderSolutions() {
	const container = document.getElementById('solutionsContainer');
	const allContainer = document.getElementById('allSolutionsContainer');

	const html = solutions.map(sol => `
        <a href="solution-detail.html?id=${sol.id}" style="text-decoration: none;">
            <div class="solution-card">
                <img src="${sol.image}" alt="${sol.title}" class="solution-image">
                <div class="solution-overlay"></div>
                <div class="solution-content">
                    <div class="solution-title">${sol.title}</div>
                    <div class="solution-desc">${sol.desc}</div>
                </div>
            </div>
        </a>
    `).join('');

	if (container) container.innerHTML = html;
	if (allContainer) allContainer.innerHTML = html;
}

function renderCases() {
	const container = document.getElementById('casesContainer');
	const allContainer = document.getElementById('allCasesContainer');

	const html = cases.map(cse => `
        <a href="case-detail.html?id=${cse.id}" style="text-decoration: none;">
            <div class="case-card">
                <img src="${cse.image}" alt="${cse.title}" class="case-image">
                <div class="case-body">
                    <div class="case-category">${cse.category}</div>
                    <h3 class="case-title">${cse.title}</h3>
                    <p class="case-desc">${cse.desc}</p>
                </div>
            </div>
        </a>
    `).join('');

	if (container) container.innerHTML = html;
	if (allContainer) allContainer.innerHTML = html;
}

function renderAbout() {
	const container = document.getElementById('aboutContainer');
	if (!container) return;

	container.innerHTML = `
        <div class="about-text">${aboutData.intro}</div>
        <div class="about-text">${aboutData.history}</div>
        <div class="about-text">${aboutData.team}</div>
        <div class="about-text"><strong>愿景：</strong> ${aboutData.vision}</div>
    `;
}

function renderContact() {
	const container = document.getElementById('contactContainer');
	if (!container) return;

	container.innerHTML = `
        <div class="contact-item">
            <h3>📍 地址</h3>
            <p>${siteConfig.contact.address}</p>
        </div>
        <div class="contact-item">
            <h3>📞 电话</h3>
            <p>${siteConfig.contact.phone}</p>
        </div>
        <div class="contact-item">
            <h3>📧 邮箱</h3>
            <p>${siteConfig.contact.email}</p>
        </div>
    `;
}

// ========== Navigation ==========
function setActiveNavLink(pageName) {
	const navLinks = document.querySelectorAll('.navbar-menu a');
	navLinks.forEach(link => {
		if (link.getAttribute('data-page') === pageName) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
}

// ========== Initialization ==========
document.addEventListener('DOMContentLoaded', function() {
	renderAdvantages();
	renderSolutions();
	renderCases();
	renderAbout();
	renderContact();

	// Initialize carousel if it exists
	const carouselContainer = document.getElementById('carouselContainer');
	if (carouselContainer) {
		showSlide(currentSlide);
	}

	// Set initial active nav link
	const currentPage = window.location.pathname.split('/').pop() || 'index.html';
	if (currentPage === 'index.html' || currentPage === '') {
		setActiveNavLink('home');
	} else {
		const pageName = currentPage.replace('.html', '');
		setActiveNavLink(pageName);
	}
});

// ========== Keyboard Navigation ==========
document.addEventListener('keydown', function(event) {
	if (event.key === 'ArrowLeft') prevSlide();
	if (event.key === 'ArrowRight') nextSlide();
});