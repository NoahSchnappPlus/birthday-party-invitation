'<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- 3D粉红泡泡背景 -->
    <div ref="bubbleContainer" class="fixed inset-0 -z-10"></div>
    
    <!-- 背景音乐控制 -->
    <div class="fixed top-4 right-4 z-50" @click="toggleMusic">
      <div class="w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-white shadow-lg cursor-pointer animate-spin-slow" :class="{ 'animate-paused': !isMusicPlaying }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18V5l12-2v13M9 18c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 13c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      </div>
    </div>
    
    <!-- 移动端菜单按钮 -->
    <div class="md:hidden fixed top-4 left-4 z-50" @click="showMobileMenu = !showMobileMenu">
      <div class="w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-white shadow-lg cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>
    
    <!-- 移动端菜单 -->
    <div v-if="showMobileMenu" class="fixed inset-0 bg-black/50 backdrop-blur-md z-40 flex items-center justify-center" @click="showMobileMenu = false">
      <div class="bg-white/95 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full" @click.stop>
        <h3 class="text-2xl font-elegant font-bold text-primary mb-6 text-center">目录</h3>
        <div class="space-y-4">
          <div v-for="link in navLinks" :key="link.id" class="py-2">
            <button 
              @click="scrollToSection(link.id); showMobileMenu = false" 
              class="w-full text-left px-4 py-3 rounded-lg transition-all duration-300" 
              :class="activeSection === link.id ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-gray-100'"
            >
              {{ link.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- PC端侧边导航 -->
    <div class="hidden md:block fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-primary/10 to-secondary/10 backdrop-blur-md z-40 flex flex-col items-center justify-center border-r border-primary/20 transition-all duration-500 hover:w-80">
      <div class="space-y-8">
        <div v-for="(link, index) in navLinks" :key="link.id" class="relative group">
          <button 
            @click="scrollToSection(link.id)" 
            class="flex items-center space-x-4 px-6 py-4 rounded-full transition-all duration-300 w-full max-w-xs"
            :class="activeSection === link.id 
              ? 'bg-primary/20 text-primary font-medium shadow-md transform scale-105' 
              : 'text-dark/70 hover:bg-white/30 hover:shadow-sm hover:transform hover:scale-105'
            "
          >
            <div class="w-4 h-4 rounded-full transition-all duration-300 transform" 
                 :class="activeSection === link.id 
                   ? 'bg-primary scale-125 animate-pulse' 
                   : 'bg-gray-400 group-hover:bg-gray-500'
                 "
            ></div>
            <span class="text-lg font-medium transition-all duration-300">{{ link.label }}</span>
            <div v-if="activeSection === link.id" class="ml-auto w-2 h-2 rounded-full bg-primary animate-ping"></div>
          </button>
          <div v-if="index < navLinks.length - 1" class="absolute left-2 top-8 w-0.5 h-10 bg-gradient-to-b from-gray-400 to-transparent transition-all duration-300 group-hover:from-primary/50"></div>
        </div>
      </div>
    </div>
    
    <!-- 开场加载模块 -->
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-secondary z-50">
      <div class="relative">
        <div class="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
          <div class="w-32 h-32 rounded-full bg-primary/40 flex items-center justify-center">
            <div class="w-24 h-24 rounded-full bg-primary/60 flex items-center justify-center">
              <div class="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <span class="text-white font-elegant text-xl font-bold">23</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 text-center">
          <p class="font-elegant text-2xl text-primary">加载中...</p>
          <div class="mt-4 w-40 h-2 bg-white/50 rounded-full overflow-hidden">
            <div class="h-full bg-primary rounded-full transition-all duration-300" :style="{ width: loadingProgress + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 主内容 -->
    <div v-else class="relative">
      <!-- 首屏主视觉模块 -->
      <section id="hero" class="section relative">
        <div class="max-w-5xl mx-auto w-full">
          <div class="text-center mb-12">
            <h1 class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 animate-fade-in-up">Cissie's 23rd Birthday Party</h1>
            <p class="text-2xl md:text-3xl font-elegant text-dark/80 mb-8 animate-fade-in-up" style="animation-delay: 0.2s;">致我亲爱的朋友</p>
          </div>
          
          <!-- 3D轮播图 -->
          <div class="mb-12 max-w-4xl mx-auto">
            <Swiper
              :modules="[EffectCoverflow, Navigation, Pagination, Autoplay]"
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView="auto"
              spaceBetween="5"
              loop
              :coverflowEffect="{
                rotate: 0,
                stretch: -40,
                depth: 100,
                modifier: 1.2,
                slideShadows: true
              }"
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false
              }"
              pagination
              navigation
              class="w-full h-80 md:h-[400px]"
              :breakpoints="{
                320: {
                  slidesPerView: 1.8,
                  spaceBetween: 3
                },
                768: {
                  slidesPerView: 3.5,
                  spaceBetween: 5
                }
              }"
            >
              <SwiperSlide v-for="(image, index) in galleryImages" :key="index" class="relative rounded-2xl overflow-hidden shadow-xl">
                <div class="relative w-full h-full overflow-hidden">
                  <img :src="image" alt="Gallery image" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div class="absolute inset-0 border-4 border-white/20 rounded-2xl"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          
          <div class="text-center">
            <p class="text-xl text-dark/70 mb-12 animate-fade-in-up" style="animation-delay: 0.4s;">欢迎你参加我的生日派对！</p>
            <div class="animate-bounce-slow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 核心信息与场地模块 -->
      <section id="info" class="section bg-white/50">
        <div class="max-w-4xl mx-auto w-full">
          <h2 class="text-4xl font-bold text-primary mb-12 text-center">派对信息</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="card">
              <h3 class="text-2xl font-bold text-dark mb-4">时间</h3>
              <p class="text-xl text-dark/80 mb-2">2026年3月14日</p>
              <p class="text-xl text-dark/80">11:00~17:00</p>
            </div>
            <div class="card">
              <h3 class="text-2xl font-bold text-dark mb-4">地点</h3>
              <p class="text-xl text-dark/80 mb-2">璞璞包下的大别墅！</p>
              <p class="text-lg text-dark/70 mb-4">深圳市龙岗区方块A别墅</p>
              <button class="btn-primary w-full" @click="navigateToVenue">点击导航</button>
            </div>
          </div>
          
          <div class="mt-12">
            <h3 class="text-2xl font-bold text-dark mb-6">场地展示</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="(image, index) in venueImages" :key="index" class="cursor-pointer overflow-hidden rounded-xl shadow-lg group" @click="openLightbox(index)">
                <div class="relative w-full h-64 overflow-hidden">
                  <img :src="image.src" :alt="image.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h4 class="text-white text-lg font-bold mb-1">{{ image.title }}</h4>
                    <p class="text-white/80 text-sm">{{ image.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 派对日程模块 -->
      <section id="timeline" class="section relative overflow-hidden">
        <!-- 装饰元素 -->
        <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div class="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse-slow"></div>
          <div class="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse-slow" style="animation-delay: 1s;"></div>
          <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse-slow" style="animation-delay: 0.5s;"></div>
        </div>
        <div class="max-w-3xl mx-auto w-full relative z-10">
          <h2 class="text-4xl font-bold text-primary mb-12 text-center">派对日程</h2>
          <div class="space-y-8">
            <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s;">
              <div class="flex items-start space-x-4">
                <div class="w-20 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span class="text-primary font-bold text-sm whitespace-nowrap">11:30-12:10</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-dark mb-2">入场自由与寿星拍照</h3>
                  <p class="text-dark/80">签到入场，自由交流，与寿星合影留念</p>
                </div>
              </div>
            </div>
            <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s;">
              <div class="flex items-start space-x-4">
                <div class="w-20 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span class="text-primary font-bold text-sm whitespace-nowrap">12:10-13:00</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-dark mb-2">烧烤吃披萨聊天</h3>
                  <p class="text-dark/80">享用美味的烧烤和披萨，与朋友们愉快聊天</p>
                </div>
              </div>
            </div>
            <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s;">
              <div class="flex items-start space-x-4">
                <div class="w-20 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span class="text-primary font-bold text-sm whitespace-nowrap">13:00-13:15</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-dark mb-2">切蛋糕唱生日歌合影留恋</h3>
                  <p class="text-dark/80">一起为寿星唱生日歌，切蛋糕，拍照留念</p>
                </div>
              </div>
            </div>
            <div class="timeline-item animate-fade-in-up cursor-pointer" style="animation-delay: 0.4s;" @click="showGamesModal = true">
              <div class="flex items-start space-x-4">
                <div class="w-20 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span class="text-primary font-bold text-sm whitespace-nowrap">13:15-14:30</span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold text-dark mb-2">户外游戏活动</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p class="text-dark/80 mb-2">参与有趣的户外游戏，增进友谊</p>
                  <p class="text-primary text-sm font-medium">点击查看游戏详情 & 投票</p>
                </div>
              </div>
            </div>
            <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.5s;">
              <div class="flex items-start space-x-4">
                <div class="w-20 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span class="text-primary font-bold text-sm whitespace-nowrap">14:30-16:30</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-dark mb-2">室内桌游</h3>
                  <p class="text-dark/80">在室内进行各种有趣的桌游活动</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 祝福留言墙模块 -->
      <section id="wishes" class="section bg-white/50 relative overflow-hidden">
        <div class="max-w-4xl mx-auto w-full relative z-10">
          <!-- 漂浮元素容器 -->
          <div class="relative h-48 mb-12 overflow-visible rounded-lg">
            <div 
              v-for="(wish, index) in floatingWishes" 
              :key="wish.id"
              class="absolute px-3 py-2 rounded-lg bg-white/40 backdrop-blur-sm shadow-md text-sm max-w-xs border border-primary/20 hover:bg-white/70 transition-all duration-300 cursor-pointer"
              :style="{
                left: '0%',
                top: wish.y + '%',
                animation: (wish.isPaused || isAllPaused) ? 'none' : `float ${wish.speed}s linear infinite`,
                animationDelay: wish.delay + 's',
                zIndex: (wish.isPaused || isAllPaused) ? '100' : wish.zIndex,
                minWidth: '140px',
                maxWidth: '200px',
                minHeight: '60px',
                maxHeight: '120px',
                opacity: (wish.isPaused || isAllPaused) ? '0.9' : '0.6',
                visibility: 'visible',
                transform: (wish.isPaused || isAllPaused) ? 'scale(1.1)' : 'scale(1)'
              }"
              @mouseenter="pauseFloatingWish()"
              @mouseleave="resumeFloatingWish()"
              @click="toggleFloatingWishPause(wish.id)"
            >
              <div class="font-bold text-primary mb-1 text-sm">{{ wish.name }}</div>
              <div class="text-dark text-xs overflow-y-auto max-h-12">{{ wish.content }}</div>
              <div v-if="wish.formattedTime" class="text-gray-500 text-xs mt-1">{{ wish.formattedTime }}</div>
            </div>
          </div>
          
          <div class="mb-12">
            <h2 class="text-4xl font-bold text-primary text-center mb-4">祝福留言墙</h2>
            <div class="flex justify-center">
              <button class="btn-primary relative z-20" @click="showAllWishes = true">
                查看全部祝福
              </button>
            </div>
          </div>
          <div class="card mb-8 relative z-10">
            <h3 class="text-2xl font-bold text-dark mb-4">写下你的祝福</h3>
            <div class="space-y-4">
              <input v-model="newWish.name" type="text" placeholder="请输入你的名字" class="w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary">
              <textarea v-model="newWish.content" placeholder="请输入你的祝福" class="w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary h-32"></textarea>
              <button class="btn-primary w-full" @click="submitWish" :disabled="isSubmittingWish">
                <span v-if="isSubmittingWish">发送中...</span>
                <span v-else>发送祝福</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 出席确认表单 -->
      <section id="rsvp" class="section">
        <div class="max-w-2xl mx-auto w-full">
          <h2 class="text-4xl font-bold text-primary mb-12 text-center">出席确认</h2>
          <div class="card">
            <form @submit.prevent="submitRSVP">
              <div class="space-y-4">
                <div>
                  <label class="block text-dark font-medium mb-2">姓名</label>
                  <input v-model="rsvp.name" type="text" class="w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary" required>
                </div>
                <div>
                  <label class="block text-dark font-medium mb-2">是否出席</label>
                  <div class="flex space-x-4">
                    <label class="flex items-center space-x-2">
                      <input v-model="rsvp.attending" type="radio" value="yes" class="w-4 h-4 text-primary focus:ring-primary">
                      <span>欣然前往</span>
                    </label>
                    <label class="flex items-center space-x-2">
                      <input v-model="rsvp.attending" type="radio" value="no" class="w-4 h-4 text-primary focus:ring-primary">
                      <span>遗憾错过</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="block text-dark font-medium mb-2">随行人数</label>
                  <select v-model="rsvp.guests" class="w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="0">0人</option>
                    <option value="1">1人</option>
                    <option value="2">2人</option>
                    <option value="3">3人及以上</option>
                  </select>
                </div>
                <div>
                  <label class="block text-dark font-medium mb-2">特殊要求/忌口（选填）</label>
                  <textarea v-model="rsvp.specialRequests" placeholder="请输入特殊要求或忌口" class="w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary h-24"></textarea>
                </div>
                <button type="submit" class="btn-primary w-full" :disabled="isSubmittingRSVP">
                  <span v-if="isSubmittingRSVP">提交中...</span>
                  <span v-else>提交确认</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <!-- 数据导出 -->
      <section id="export" class="section bg-white/50">
        <div class="max-w-2xl mx-auto w-full text-center">
          <h2 class="text-4xl font-bold text-primary mb-8">数据导出</h2>
          <p class="text-lg text-dark/80 mb-8">导出所有祝福留言和出席确认数据</p>
          <button class="btn-primary" @click="exportData">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            导出数据
          </button>
        </div>
      </section>
    </div>
    
    <!-- 全屏图片查看器 -->
    <div v-if="lightboxVisible" class="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-4" @click="closeLightbox">
      <div class="relative max-w-4xl max-h-[80vh]" @click.stop>
        <img :src="venueImages[lightboxIndex].src" :alt="venueImages[lightboxIndex].title" class="max-w-full max-h-[80vh] object-contain rounded-lg">
        <button class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white" @click="closeLightbox">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 max-w-4xl w-full text-center" @click.stop>
        <h4 class="text-white text-2xl font-bold mb-2">{{ venueImages[lightboxIndex].title }}</h4>
        <p class="text-white/80 text-lg">{{ venueImages[lightboxIndex].description }}</p>
      </div>
    </div>
    
    <!-- 感谢提示框 -->
    <div v-if="showThankYou" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl p-8 max-w-md text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-2xl font-bold text-dark mb-2">感谢您的确认！</h3>
        <p class="text-dark/80 mb-6">我们已经收到了您的出席信息</p>
        <button class="btn-primary" @click="showThankYou = false">确定</button>
      </div>
    </div>
    
    <!-- 游戏投票模态框 -->
    <div v-if="showGamesModal" class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-3xl font-bold text-primary">户外游戏投票</h3>
          <button class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-dark hover:bg-gray-300 transition-all duration-300" @click="showGamesModal = false">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p class="text-dark/80 mb-6">请选择你喜欢的户外游戏（可多选）</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div v-for="game in games" :key="game.id" class="border rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
            <div class="relative">
              <img :src="game.image" :alt="game.name" class="w-full h-48 object-cover object-top">
              <div class="absolute top-4 right-4">
                <button 
                  @click="toggleGameSelection(game.id)" 
                  class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  :class="selectedGames.includes(game.id) ? 'bg-primary text-white' : 'bg-white/80 text-gray-500 hover:bg-white'"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="p-4">
              <div class="flex justify-between items-center">
                <h4 class="text-xl font-bold text-dark">{{ game.name }}</h4>
                <div class="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span class="font-medium">{{ getGameVoteCount(game.id) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="voteSuccess" class="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
          投票成功！
        </div>
        <div class="flex justify-end space-x-4">
          <button class="px-6 py-3 rounded-full border border-gray-300 text-dark hover:bg-gray-100 transition-all duration-300" @click="showGamesModal = false" :disabled="isVoting">取消</button>
          <button class="btn-primary" @click="submitGameVotes" :disabled="isVoting">
            <span v-if="isVoting">投票中...</span>
            <span v-else>提交投票</span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 查看全部祝福弹窗 -->
    <div v-if="showAllWishes" class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-3xl font-bold text-primary">全部祝福</h3>
          <button class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-dark hover:bg-gray-300 transition-all duration-300" @click="showAllWishes = false">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="space-y-4">
          <div v-for="(wish, index) in wishes" :key="index" class="border border-primary/30 rounded-lg p-4 bg-white/50">
            <div class="flex justify-between items-start">
              <h4 class="font-bold text-primary">{{ wish.name }}</h4>
              <span class="text-xs text-gray-500">{{ wish.formattedTime || (wish.timestamp ? new Date(wish.timestamp).toLocaleString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) : '') }}</span>
            </div>
            <p class="mt-2 text-dark/80">{{ wish.content }}</p>
          </div>
          <div v-if="isLoadingWishes" class="text-center py-8">
            <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
            <p class="text-primary">加载祝福中...</p>
          </div>
          <div v-else-if="wishesError" class="text-center py-8 text-red-500">
            {{ wishesError }}
          </div>
          <div v-else-if="wishes.length === 0" class="text-center py-8 text-gray-500">
            暂无祝福信息
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import * as THREE from 'three'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// API 基础地址
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

// 状态管理
const isLoading = ref(true)
const loadingProgress = ref(0)
const isMusicPlaying = ref(false)
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)
const showThankYou = ref(false)
const showMobileMenu = ref(false)
const activeSection = ref('hero')
const showAllWishes = ref(false)

// 图片数据
const galleryImages = ref([
  './img/1.jpg',
  './img/20260311221158_780_1.jpg',
  './img/20260311221159_781_1.jpg',
  './img/20260311221200_782_1.jpg',
  './img/20260311221201_783_1.jpg',
  './img/20260311221444_784_1.jpg',
  './img/20260311221445_785_1.jpg',
  './img/20260311221446_786_1.jpg',
  './img/20260311221447_787_1.jpg',
  './img/20260311222117_795_1.jpg',
  './img/55.jpg',
  './img/65e589d136ceac0b273846ba4d6b3638.jpg',
  './img/78cd8abbee5e4ad5b7916eb345c5fcb2.jpg',
  './img/8209980757b585cecdc8710a2552cb4c.jpg',
  './img/SGD4.jpg',
  './img/a8e351e2f210f0f53827deea3def6d70.jpg',
  './img/bd49cb9e3fc78944de1f440b22c57aa7.jpg',
  './img/udhgiuhguG.jpg',
  './img/微信图片_20260311221448_788_1.jpg',
  './img/微信图片_20260311222103_789_1.jpg',
  './img/微信图片_20260311222105_790_1.jpg',
  './img/微信图片_20260311222107_791_1.jpg',
  './img/微信图片_20260311222110_793_1.jpg',
  './img/微信图片_20260311222114_794_1.jpg',
  './img/微信图片_20260311222119_796_1.jpg',
  './img/微信图片_20260311222121_797_1.jpg',
  './img/微信图片_20260311222124_798_1.jpg',
  './img/微信图片_20260311222127_799_1.jpg',
  './img/微信图片_20260311222130_801_1.jpg',
  './img/微信图片_20260311222221_803_1.jpg',
  './img/微信图片_20260311222224_804_1.jpg',
  './img/微信图片_20260311222231_805_1.jpg'
])

// 场地图片数据
const venueImages = ref([
  {
    src: './img_party/0dc4dc5fc53eb2c3383b8da21718f68d.jpg',
    title: '电玩大厅',
    description: '华丽的入口通道，迎接各位宾客的到来'
  },
  {
    src: './img_party/22e7e5ba956d2f2f0992aaea14a8f8b8.jpg',
    title: '户外草坪',
    description: '射箭&户外游戏 E人狂喜！'
  },
  {
    src: './img_party/a20e507cc2f44952fa90e3f6c9485c75.jpg',
    title: '懒人桌游',
    description: 'Cissie最爱的狼人杀！！！'
  },
  {
    src: './img_party/db74d7029a262b488c1eea2dd0ede979.jpg',
    title: '台球区域',
    description: '好久没打台球了'
  },
  {
    src: './img_party/de03777c67acdd8acefd15d3d654eabf.jpg',
    title: '聚餐Party',
    description: '烧烤 披萨 蛋糕 茶点~'
  },
  {
    src: './img_party/fbc660c9b1695ce6b9e829474f2d6f4d.jpg',
    title: '我是歌手',
    description: 'HAPPY BIRTHDAY TO YOU CISSIE!!!'
  }
])

// 导航链接
const navLinks = ref([
  { id: 'hero', label: '邀请函主页' },
  { id: 'info', label: '派对信息' },
  { id: 'timeline', label: '活动日程' },
  { id: 'wishes', label: '祝福留言' },
  { id: 'rsvp', label: '出席确认' },
  { id: 'export', label: '数据导出' }
])

// 游戏相关状态
const showGamesModal = ref(false)
const selectedGames = ref([])
const gameVotes = ref(JSON.parse(localStorage.getItem('gameVotes')) || {})
const isVoting = ref(false)
const voteSuccess = ref(false)

// 游戏数据
const games = ref([
  {
    id: 'game1',
    name: '你来我往',
    image: './img_game/你来我往.png'
  },
  {
    id: 'game2',
    name: '加字游戏',
    image: './img_game/加字游戏.png'
  },
  {
    id: 'game3',
    name: '开关游戏',
    image: './img_game/开关游戏.png'
  },
  {
    id: 'game4',
    name: '抓鸭子',
    image: './img_game/抓鸭子.png'
  },
  {
    id: 'game5',
    name: '真真假假',
    image: './img_game/真真假假.png'
  },
  {
    id: 'game6',
    name: '闹钟炸弹',
    image: './img_game/闹钟炸弹.png'
  }
])

// 表单数据
const newWish = ref({ name: '', content: '' })
const wishes = ref([])
const rsvp = ref({ name: '', attending: 'yes', guests: '0', specialRequests: '' })
const rsvpList = ref(JSON.parse(localStorage.getItem('birthdayRSVP')) || [])
const isSubmittingRSVP = ref(false)
const isSubmittingWish = ref(false)
const isLoadingWishes = ref(false)
const wishesError = ref('')
const lastWishRequestTime = ref(0)
const wishRequestTimeout = ref(null)

// 漂浮留言
const floatingWishes = ref([])
const wishFloatInterval = ref(null)
const isFloatingEnabled = ref(true)
const floatDensity = ref(3) // 密度：1-10，数字越大密度越高
const isAllPaused = ref(false)

// 场地图片已在上方声明

// 3D泡泡背景
let scene, camera, renderer, bubbles = []
const bubbleContainer = ref(null)

// 初始化加载
onMounted(async () => {
  // 模拟加载过程
  const loadingInterval = setInterval(() => {
    loadingProgress.value += 5
    if (loadingProgress.value >= 100) {
      clearInterval(loadingInterval)
      setTimeout(async () => {
        isLoading.value = false
        initBubbles()
        // 页面加载时获取祝福语数据
        await fetchWishes()
        console.log('准备启动漂浮留言')
        startFloatingWishes()
      }, 500)
    }
  }, 100)
  
  // 监听用户交互以播放音乐
  document.addEventListener('touchstart', playMusic, { once: true })
  document.addEventListener('click', playMusic, { once: true })
  
  // 监听滚动更新活动区域
  window.addEventListener('scroll', updateActiveSection)
  // 初始更新
  updateActiveSection()
})

// 清理
onUnmounted(() => {
  if (renderer) {
    renderer.dispose()
  }
  if (scene) {
    scene.clear()
  }
  window.removeEventListener('scroll', updateActiveSection)
  stopFloatingWishes()
})

// 初始化3D泡泡
function initBubbles() {
  if (!bubbleContainer.value) return
  
  // 创建场景
  scene = new THREE.Scene()
  
  // 创建相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5
  
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  bubbleContainer.value.appendChild(renderer.domElement)
  
  // 创建泡泡
  for (let i = 0; i < 50; i++) {
    createBubble()
  }
  
  // 动画循环
  animate()
  
  // 响应窗口大小变化
  window.addEventListener('resize', onWindowResize)
}

// 创建单个泡泡
function createBubble() {
  const geometry = new THREE.SphereGeometry(0.1 + Math.random() * 0.3, 32, 32)
  const material = new THREE.MeshBasicMaterial({
    color: 0xFF6B95,
    transparent: true,
    opacity: 0.3 + Math.random() * 0.5
  })
  const bubble = new THREE.Mesh(geometry, material)
  
  // 随机位置
  bubble.position.x = (Math.random() - 0.5) * 10
  bubble.position.y = (Math.random() - 0.5) * 10
  bubble.position.z = (Math.random() - 0.5) * 10
  
  // 随机速度
  bubble.userData = {
    velocity: {
      x: (Math.random() - 0.5) * 0.01,
      y: (Math.random() - 0.5) * 0.01,
      z: (Math.random() - 0.5) * 0.01
    }
  }
  
  scene.add(bubble)
  bubbles.push(bubble)
}

// 动画循环
function animate() {
  requestAnimationFrame(animate)
  
  // 更新泡泡位置
  bubbles.forEach(bubble => {
    bubble.position.x += bubble.userData.velocity.x
    bubble.position.y += bubble.userData.velocity.y
    bubble.position.z += bubble.userData.velocity.z
    
    // 边界检查
    if (Math.abs(bubble.position.x) > 5) bubble.userData.velocity.x *= -1
    if (Math.abs(bubble.position.y) > 5) bubble.userData.velocity.y *= -1
    if (Math.abs(bubble.position.z) > 5) bubble.userData.velocity.z *= -1
    
    // 旋转
    bubble.rotation.x += 0.01
    bubble.rotation.y += 0.01
  })
  
  renderer.render(scene, camera)
}

// 窗口大小变化
function onWindowResize() {
  if (!camera || !renderer) return
  
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// 音乐控制
let audioElement = null

function playMusic() {
  // 创建音频元素并播放音乐
  // 注意：需要在public目录中添加music.mp3文件
  if (!audioElement) {
    try {
      // 尝试不同的音乐文件路径
      const musicPaths = ['./music.mp3', '/music.mp3', 'music.mp3']
      let found = false
      
      for (const path of musicPaths) {
        try {
          audioElement = new Audio(path)
          audioElement.loop = true
          audioElement.volume = 0.3
          
          // 测试是否能加载音频
          audioElement.load()
          
          // 播放音频
          return audioElement.play().then(() => {
            console.log('音乐播放成功，路径:', path)
            isMusicPlaying.value = true
          }).catch(err => {
            console.log('音乐播放失败:', err)
            // 如果音乐文件不存在或播放失败，仍然设置状态为播放中
            isMusicPlaying.value = true
          })
        } catch (err) {
          console.log('尝试路径失败:', path, err)
          continue
        }
      }
      
      // 如果所有路径都失败
      console.log('所有音乐路径都失败')
      isMusicPlaying.value = true
    } catch (err) {
      console.log('音乐文件未找到:', err)
      // 如果音乐文件不存在，仍然设置状态为播放中
      isMusicPlaying.value = true
    }
  } else {
    audioElement.play().then(() => {
      console.log('音乐播放成功')
      isMusicPlaying.value = true
    }).catch(err => {
      console.log('音乐播放失败:', err)
    })
  }
}

function toggleMusic() {
  if (audioElement) {
    if (isMusicPlaying.value) {
      audioElement.pause()
      isMusicPlaying.value = false
    } else {
      audioElement.play().then(() => {
        console.log('音乐播放成功')
        isMusicPlaying.value = true
      }).catch(err => {
        console.log('音乐播放失败:', err)
        isMusicPlaying.value = true
      })
    }
  } else {
    playMusic()
  }
}

// 场地导航
function navigateToVenue() {
  const address = '北京市朝阳区建国路88号星光宴会厅'
  const url = `https://maps.google.com?q=${encodeURIComponent(address)}`
  window.open(url, '_blank')
}

// 图片查看器
function openLightbox(index) {
  lightboxIndex.value = index
  lightboxVisible.value = true
}

function closeLightbox() {
  lightboxVisible.value = false
}

// 获取祝福语数据
async function fetchWishes() {
  // 防抖处理：避免短时间内重复请求
  const now = Date.now()
  if (now - lastWishRequestTime.value < 1000) {
    return
  }
  
  isLoadingWishes.value = true
  wishesError.value = ''
  lastWishRequestTime.value = now
  
  // 清除之前的超时
  if (wishRequestTimeout.value) {
    clearTimeout(wishRequestTimeout.value)
  }
  
  try {
    // 设置30秒超时
    const controller = new AbortController()
    wishRequestTimeout.value = setTimeout(() => controller.abort(), 30000)
    
    const response = await fetch(`${API_BASE_URL}/api/wishes`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      signal: controller.signal
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const responseData = await response.json()
    console.log('获取祝福语响应:', responseData)
    
    // 检查接口返回的success状态
    if (!responseData.success) {
      throw new Error(responseData.message || '获取祝福失败')
    }
    
    // 提取data数组
    const data = responseData.data || []
    console.log('获取祝福语数据:', data)
    
    // 处理数据，格式化时间
    const formattedWishes = data.map(wish => ({
      name: wish.guest_name,
      content: wish.blessing_text,
      timestamp: new Date(wish.created_at).toISOString(),
      formattedTime: formatDateTime(wish.created_at)
    }))
    
    // 更新本地数据
    wishes.value = formattedWishes
    localStorage.setItem('birthdayWishes', JSON.stringify(formattedWishes))
  } catch (error) {
    console.error('获取祝福语失败:', error)
    wishesError.value = error.name === 'AbortError' ? '请求超时，请稍后重试' : error.message || '获取祝福失败，请稍后重试'
    
    // 如果请求失败，使用本地缓存数据
    const cachedWishes = JSON.parse(localStorage.getItem('birthdayWishes'))
    if (cachedWishes) {
      wishes.value = cachedWishes
    } else {
      // 如果没有缓存，使用默认数据
      wishes.value = [
        { name: '小明', content: '祝你生日快乐，永远年轻漂亮！', timestamp: new Date().toISOString(), formattedTime: formatDateTime(new Date()) },
        { name: '小红', content: '期待参加你的生日派对，一定会很开心！', timestamp: new Date().toISOString(), formattedTime: formatDateTime(new Date()) },
        { name: '小李', content: '愿你的23岁充满惊喜和美好！', timestamp: new Date().toISOString(), formattedTime: formatDateTime(new Date()) }
      ]
    }
  } finally {
    isLoadingWishes.value = false
    if (wishRequestTimeout.value) {
      clearTimeout(wishRequestTimeout.value)
      wishRequestTimeout.value = null
    }
  }
}

// 格式化日期时间
function formatDateTime(dateString) {
  const date = new Date(dateString)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// 提交祝福
async function submitWish() {
  // 表单验证
  if (!newWish.value.name) {
    alert('请留下您的名字')
    return
  }
  if (!newWish.value.content) {
    alert('请留下您的祝福')
    return
  }
  
  isSubmittingWish.value = true
  try {
    // 准备请求数据
    const wishData = {
      guest_name: newWish.value.name,
      blessing_text: newWish.value.content
    }
    
    console.log('祝福请求数据:', wishData)
    console.log('祝福请求数据字符串:', JSON.stringify(wishData))
    
    // 尝试发送请求
    const response = await fetch(`${API_BASE_URL}/api/wishes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(wishData)
    })
    
    console.log('祝福请求成功发送')
    
    if (response.ok) {
      alert('祝福已送达，非常感谢！')
      newWish.value = { name: '', content: '' }
      // 提交成功后立即获取最新数据
      await fetchWishes()
    } else {
      // 即使响应不成功，也保存到本地
      saveWishLocally(newWish.value)
      alert('提交到服务器失败，但已保存到本地')
    }
  } catch (error) {
    console.error('祝福请求失败:', error)
    // 网络错误时保存到本地
    saveWishLocally(newWish.value)
    alert('网络请求失败，已保存到本地')
  } finally {
    isSubmittingWish.value = false
  }
}

// 保存祝福到本地
function saveWishLocally(wish) {
  const newWishItem = {
    name: wish.name,
    content: wish.content,
    timestamp: new Date().toISOString(),
    formattedTime: formatDateTime(new Date())
  }
  wishes.value.unshift(newWishItem)
  localStorage.setItem('birthdayWishes', JSON.stringify(wishes.value))
  newWish.value = { name: '', content: '' }
}

// 提交RSVP
async function submitRSVP() {
  // 表单验证
  if (!rsvp.value.name) {
    alert('请输入您的姓名')
    return
  }
  if (!rsvp.value.attending) {
    alert('请选择是否出席')
    return
  }
  
  isSubmittingRSVP.value = true
  try {
    // 准备请求数据
    const rsvpData = {
      guest_name: rsvp.value.name,
      is_attending: rsvp.value.attending === 'yes' ? 1 : 0,
      accompanying_count: parseInt(rsvp.value.guests) || 0,
      dietary_remarks: rsvp.value.specialRequests || ''
    }
    
    console.log('API_BASE_URL:', API_BASE_URL)
    console.log('请求数据:', rsvpData)
    console.log('请求URL:', `${API_BASE_URL}/api/rsvp`)
    console.log('请求数据字符串:', JSON.stringify(rsvpData))
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/rsvp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(rsvpData)
      })
      
      console.log('请求成功发送')
      
      console.log('响应状态:', response.status)
      console.log('响应状态文本:', response.statusText)
      
      const responseData = await response.json()
      console.log('响应数据:', responseData)
      
      if (response.ok) {
        // 本地存储
        rsvpList.value.push({ ...rsvp.value, timestamp: new Date().toISOString() })
        localStorage.setItem('birthdayRSVP', JSON.stringify(rsvpList.value))
        showThankYou.value = true
        rsvp.value = { name: '', attending: 'yes', guests: '0', specialRequests: '' }
      } else {
        console.log('响应错误:', responseData)
        alert('提交失败，请稍后重试')
      }
    } catch (error) {
      console.error('网络请求错误:', error)
      console.error('错误类型:', error.name)
      console.error('错误消息:', error.message)
      throw error // 重新抛出错误，让外部catch块处理
    }
  } catch (error) {
    console.error('RSVP请求失败:', error)
    // 即使网络请求失败，也保存到本地
    rsvpList.value.push({ ...rsvp.value, timestamp: new Date().toISOString() })
    localStorage.setItem('birthdayRSVP', JSON.stringify(rsvpList.value))
    alert('网络请求失败，已保存到本地')
    showThankYou.value = true
    rsvp.value = { name: '', attending: 'yes', guests: '0', specialRequests: '' }
  } finally {
    isSubmittingRSVP.value = false
  }
}

// 导出数据
function exportData() {
  const data = {
    wishes: wishes.value,
    rsvp: rsvpList.value,
    gameVotes: gameVotes.value,
    exportTime: new Date().toISOString()
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `birthday-party-data-${new Date().toISOString().split('T')[0]}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// 滚动到指定区域
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 监听滚动更新当前活动区域
function updateActiveSection() {
  const sections = navLinks.value.map(link => link.id)
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

// 游戏投票相关函数
function toggleGameSelection(gameId) {
  const index = selectedGames.value.indexOf(gameId)
  if (index > -1) {
    selectedGames.value.splice(index, 1)
  } else {
    selectedGames.value.push(gameId)
  }
}

async function submitGameVotes() {
  if (selectedGames.value.length === 0) {
    alert('请至少选择一个游戏')
    return
  }
  
  isVoting.value = true
  try {
    // 准备请求数据
    const gameNames = selectedGames.value.map(gameId => {
      const game = games.value.find(g => g.id === gameId)
      return game ? game.name : ''
    }).filter(Boolean)
    
    const voteData = { games: gameNames }
    console.log('投票请求数据:', voteData)
    console.log('投票请求数据字符串:', JSON.stringify(voteData))
    
    const response = await fetch(`${API_BASE_URL}/api/vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(voteData)
    })
    
    console.log('投票请求成功发送')
    
    if (response.ok) {
      // 本地存储投票结果
      selectedGames.value.forEach(gameId => {
        if (gameVotes.value[gameId]) {
          gameVotes.value[gameId]++
        } else {
          gameVotes.value[gameId] = 1
        }
      })
      localStorage.setItem('gameVotes', JSON.stringify(gameVotes.value))
      
      voteSuccess.value = true
      setTimeout(() => {
        voteSuccess.value = false
        showGamesModal.value = false
        selectedGames.value = []
      }, 2000)
    } else {
      alert('投票失败，请稍后重试')
    }
  } catch (error) {
    console.error('投票请求失败:', error)
    // 即使网络请求失败，也保存到本地
    selectedGames.value.forEach(gameId => {
      if (gameVotes.value[gameId]) {
        gameVotes.value[gameId]++
      } else {
        gameVotes.value[gameId] = 1
      }
    })
    localStorage.setItem('gameVotes', JSON.stringify(gameVotes.value))
    alert('网络请求失败，已保存到本地')
    showGamesModal.value = false
    selectedGames.value = []
  } finally {
    isVoting.value = false
  }
}

function getGameVoteCount(gameId) {
  return gameVotes.value[gameId] || 0
}

// 漂浮留言管理
function startFloatingWishes() {
  console.log('启动漂浮留言')
  if (wishFloatInterval.value) {
    console.log('漂浮留言已经在运行')
    return
  }
  
  console.log('当前留言数量:', wishes.value.length)
  // 清空现有漂浮留言，避免异常悬浮框
  floatingWishes.value = []
  
  // 初始添加一些漂浮留言，使用不同的延迟
  for (let i = 0; i < 3; i++) {
    console.log('添加第', i+1, '条漂浮留言')
    setTimeout(() => {
      addFloatingWish()
    }, i * 1000)
  }
  
  // 设置定时器，定期添加漂浮留言
  const interval = 3000 / floatDensity.value // 根据密度调整间隔，确保气泡有序生成
  console.log('设置定时器，间隔:', interval, 'ms')
  wishFloatInterval.value = setInterval(() => {
    if (isFloatingEnabled.value && floatingWishes.value.length < 10) {
      console.log('定时器触发，添加漂浮留言')
      addFloatingWish()
      console.log('当前漂浮留言数量:', floatingWishes.value.length)
    }
  }, interval)
  
  console.log('漂浮留言启动完成')
}

function stopFloatingWishes() {
  if (wishFloatInterval.value) {
    clearInterval(wishFloatInterval.value)
    wishFloatInterval.value = null
  }
  floatingWishes.value = []
}

function addFloatingWish() {
  console.log('addFloatingWish 被调用')
  
  // 限制漂浮留言数量不超过10个，避免重叠
  if (floatingWishes.value.length >= 10) {
    console.log('漂浮留言数量已达上限')
    return
  }
  
  if (wishes.value.length === 0) {
    console.log('没有留言可以漂浮')
    return
  }
  
  // 随机选择一条留言
  const randomIndex = Math.floor(Math.random() * wishes.value.length)
  const wish = wishes.value[randomIndex]
  console.log('选择的留言:', wish)
  
  // 生成随机漂浮参数
  const floatParams = generateRandomFloatParams()
  console.log('生成的漂浮参数:', floatParams)
  
  // 创建漂浮留言对象
  const floatingWish = {
    ...wish,
    x: floatParams.x,
    y: floatParams.y,
    speed: floatParams.speed,
    delay: floatParams.delay,
    zIndex: floatParams.zIndex,
    id: Date.now() + Math.random(),
    isPaused: false
  }
  console.log('创建的漂浮留言:', floatingWish)
  
  // 添加到漂浮留言数组
  floatingWishes.value.push(floatingWish)
  console.log('添加后漂浮留言数量:', floatingWishes.value.length)
  
  // 设置定时器，在动画结束后移除留言
  const duration = (floatParams.speed + floatParams.delay) * 1000
  console.log('设置移除定时器，延迟:', duration, 'ms')
  setTimeout(() => {
    const index = floatingWishes.value.findIndex(w => w.id === floatingWish.id)
    if (index > -1) {
      const wish = floatingWishes.value[index]
      // 只有当气泡未被暂停时才移除
      if (!wish.isPaused) {
        console.log('移除漂浮留言，索引:', index)
        floatingWishes.value.splice(index, 1)
        console.log('移除后漂浮留言数量:', floatingWishes.value.length)
      } else {
        console.log('气泡已暂停，不移除')
      }
    } else {
      console.log('未找到要移除的漂浮留言')
    }
  }, duration)
}

function generateRandomFloatParams() {
  // 实现两行有序漂浮效果
  const yPositions = [30, 70]; // 两行分布，适应新容器高度
  const y = yPositions[Math.floor(Math.random() * yPositions.length)];
  
  return {
    x: 100, // 从右侧进入
    y: y, // 两行分布的垂直位置
    speed: Math.random() * 15 + 15, // 控制速度范围
    delay: Math.random() * 2, // 控制延迟范围，避免同时出现
    zIndex: Math.floor(Math.random() * 10) + 30 // 随机z-index
  }
}

// 控制漂浮效果
function toggleFloating() {
  isFloatingEnabled.value = !isFloatingEnabled.value
  if (isFloatingEnabled.value) {
    startFloatingWishes()
  } else {
    stopFloatingWishes()
  }
}

// 调整漂浮密度
function adjustFloatDensity(density) {
  floatDensity.value = Math.max(1, Math.min(10, density))
  stopFloatingWishes()
  startFloatingWishes()
}

// 暂停所有漂浮留言
function pauseFloatingWish() {
  isAllPaused.value = true
  floatingWishes.value.forEach(wish => {
    wish.isPaused = true
  })
}

// 恢复所有漂浮留言
function resumeFloatingWish() {
  isAllPaused.value = false
  floatingWishes.value.forEach(wish => {
    wish.isPaused = false
  })
}

// 切换单个漂浮留言的暂停状态
function toggleFloatingWishPause(id) {
  const wish = floatingWishes.value.find(w => w.id === id)
  if (wish) {
    wish.isPaused = !wish.isPaused
  }
}
</script>

<style>
/* 全局样式 */
/* 漂浮窗动画 */
@keyframes float {
  0% {
    transform: translateX(100vw) translateY(0);
    opacity: 0;
  }
  5% {
    opacity: 0.6;
  }
  95% {
    opacity: 0.6;
  }
  100% {
    transform: translateX(-100%) translateY(0);
    opacity: 0;
  }
}
</style>

<style scoped>
/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #FF6B95;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #FF477E;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}
</style>