// app.js - 添加全屏模块相关功能
document.addEventListener('DOMContentLoaded', function() {
	// 初始化导航栏滚动效果
	initNavbarScroll();

	// 初始化移动菜单
	initMobileMenu();

	// 初始化下拉菜单
	initDropdowns();

	// 初始化页面动画
	initAnimations();

	// 设置当前页面链接为活动状态
	setActiveNavLink();

	// 初始化全屏模块功能
	initFullscreenSections();
});

// 初始化全屏模块功能
function initFullscreenSections() {
	// 检查是否在首页
	const isHomePage = window.location.pathname.includes('index.html') ||
		window.location.pathname === '/' ||
		window.location.pathname === '';

	if (!isHomePage) return;

	const sections = document.querySelectorAll('.fullscreen-section');
	if (sections.length === 0) return;

	// 确保每个全屏模块都有最小高度
	function adjustSectionHeights() {
		sections.forEach(section => {
			section.style.minHeight = window.innerHeight + 'px';
		});
	}

	// 初始调整
	adjustSectionHeights();

	// 窗口大小变化时重新调整
	window.addEventListener('resize', adjustSectionHeights);

	// 滚动到指定模块的函数
	window.scrollToSection = function(sectionId) {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};
}

// 导航栏滚动效果
function initNavbarScroll() {
	const navbar = document.getElementById('navbar');
	if (!navbar) return;

	let lastScrollTop = 0;

	function updateNavbar() {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		if (scrollTop > 50) {
			navbar.classList.add('scrolled');

			// 向下滚动时隐藏导航栏，向上滚动时显示
			if (scrollTop > lastScrollTop && scrollTop > 100) {
				navbar.style.transform = 'translateY(-100%)';
			} else {
				navbar.style.transform = 'translateY(0)';
			}
		} else {
			navbar.classList.remove('scrolled');
			navbar.style.transform = 'translateY(0)';
		}

		lastScrollTop = scrollTop;
	}

	// 初始检查
	updateNavbar();

	// 滚动监听
	window.addEventListener('scroll', function() {
		updateNavbar();
	});
}

// 移动菜单切换
function initMobileMenu() {
	const mobileMenuBtn = document.getElementById('mobileMenuBtn');
	const mobileNav = document.getElementById('mobileNav');

	if (!mobileMenuBtn || !mobileNav) return;

	mobileMenuBtn.addEventListener('click', function() {
		mobileNav.classList.toggle('active');

		// 切换图标
		const icon = mobileMenuBtn.querySelector('i');
		if (mobileNav.classList.contains('active')) {
			icon.className = 'icon-x';
			document.body.style.overflow = 'hidden';
		} else {
			icon.className = 'icon-menu';
			document.body.style.overflow = '';
		}
	});

	// 点击链接时关闭菜单
	const mobileLinks = mobileNav.querySelectorAll('a');
	mobileLinks.forEach(link => {
		link.addEventListener('click', function() {
			mobileNav.classList.remove('active');
			mobileMenuBtn.querySelector('i').className = 'icon-menu';
			document.body.style.overflow = '';
		});
	});

	// 点击外部关闭菜单
	document.addEventListener('click', function(event) {
		if (!mobileNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
			mobileNav.classList.remove('active');
			mobileMenuBtn.querySelector('i').className = 'icon-menu';
			document.body.style.overflow = '';
		}
	});
}

// 初始化下拉菜单
function initDropdowns() {
	const dropdowns = document.querySelectorAll('.dropdown');

	dropdowns.forEach(dropdown => {
		const trigger = dropdown.querySelector('.dropdown-btn');
		const content = dropdown.querySelector('.dropdown-content');

		if (!trigger || !content) return;

		// 鼠标进入显示
		dropdown.addEventListener('mouseenter', function() {
			content.style.opacity = '1';
			content.style.visibility = 'visible';
			content.style.transform = 'translateY(0)';
		});

		// 鼠标离开隐藏
		dropdown.addEventListener('mouseleave', function() {
			content.style.opacity = '0';
			content.style.visibility = 'hidden';
			content.style.transform = 'translateY(-10px)';
		});

		// 移动端触摸事件
		let touchTimer;
		dropdown.addEventListener('touchstart', function(e) {
			e.preventDefault();
			clearTimeout(touchTimer);

			const isOpen = content.style.visibility === 'visible';

			if (!isOpen) {
				content.style.opacity = '1';
				content.style.visibility = 'visible';
				content.style.transform = 'translateY(0)';
			} else {
				content.style.opacity = '0';
				content.style.visibility = 'hidden';
				content.style.transform = 'translateY(-10px)';
			}
		});

		// 点击外部关闭
		document.addEventListener('click', function(event) {
			if (!dropdown.contains(event.target)) {
				content.style.opacity = '0';
				content.style.visibility = 'hidden';
				content.style.transform = 'translateY(-10px)';
			}
		});
	});
}

// 设置当前页面链接为活动状态
function setActiveNavLink() {
	const currentPage = window.location.pathname.split('/').pop() || 'index.html';
	const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

	navLinks.forEach(link => {
		const href = link.getAttribute('href');
		if (href === currentPage) {
			link.classList.add('active');
		} else if (currentPage.includes('solution-detail.html') && href === 'solutions.html') {
			link.classList.add('active');
		} else if (currentPage.includes('case-detail.html') && href === 'cases.html') {
			link.classList.add('active');
		}

		// 处理下拉菜单中的活动状态
		const dropdownContent = link.closest('.dropdown-content');
		if (dropdownContent && link.classList.contains('active')) {
			const dropdownBtn = dropdownContent.previousElementSibling;
			if (dropdownBtn && dropdownBtn.classList.contains('dropdown-btn')) {
				dropdownBtn.classList.add('active');
			}
		}
	});
}

// 初始化页面动画
function initAnimations() {
	// 观察器用于元素进入视口时的动画
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate-in');
			}
		});
	}, observerOptions);

	// 观察所有需要动画的元素
	const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .card, .advantage-card, .feature-item');
	animatedElements.forEach(element => {
		observer.observe(element);
	});
}

// 平滑滚动到锚点
function scrollToAnchor(anchorId) {
	const element = document.getElementById(anchorId);
	if (element) {
		const headerHeight = document.querySelector('.navbar').offsetHeight;
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
}