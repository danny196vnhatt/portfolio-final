// ... (các đoạn code ở trên giữ nguyên)

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-20 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 z-0"></div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase mb-2 animate-pulse">
              Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              Ngô Văn <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Nhật
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Financial & Market Analyst với tư duy dữ liệu sắc bén. Chuyên biến những con số khô khan thành chiến lược đầu tư hiệu quả.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="mailto:danny196nhatt@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30">
                <Mail size={18} />
                Liên hệ ngay
              </a>
              <button onClick={() => scrollToSection('experience')} className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
                Xem kinh nghiệm
                <ChevronDown size={18} />
              </button>
            </div>

            <div className="flex gap-6 pt-8 text-slate-500">
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone size={18} />
                <span>0775419990</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <MapPin size={18} />
                <span>Ho Chi Minh City</span>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-80 h-96 mx-auto">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl rotate-0 transition-transform hover:-rotate-2 duration-500 group">
                
                {/* --- CHỖ NÀY ĐÃ ĐƯỢC SỬA --- */}
                <img 
                  src="/avatar.jpg" 
                  alt="Ngô Văn Nhật" 
                  className="w-full h-full object-cover bg-blue-50 transition-transform duration-500 group-hover:scale-105"
                />
                {/* --------------------------- */}

                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-bold text-lg">Ngô Văn Nhật</p>
                  <p className="text-sm text-blue-200">Data Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

// ... (các phần dưới giữ nguyên)
```

### Lưu ý quan trọng khi Public (Đẩy lên mạng)
Vì bạn thêm file ảnh mới vào máy tính (`avatar.jpg`), nên Vercel (trang web online) chưa biết điều đó. Sau khi sửa xong và thấy đẹp trên máy mình, bạn cần chạy 3 lệnh sau để cập nhật lên mạng:

1.  Mở Terminal (`Ctrl` + `` ` ``).
2.  Gõ lần lượt:
    ```bash
    git add .
    git commit -m "Them anh dai dien"
    git push