const menuHTML = `
    <div class="menu-toggle" onclick="toggleMenu()">☰</div>
    <div class="sidebar" id="sidebar">
        <button onclick="window.location.href='inicio2.html'">🏠 Inicio</button>
        
        <button onclick="toggleSubmenu('submenuTienda')">🛒 Tiendas ▾</button>
        <div class="submenu" id="submenuTienda">
            <button onclick="window.location.href='tienda-mascotas.html'">Mascotas</button>
            <button onclick="window.location.href='tienda-objetos.html'">Objetos</button>
            <button onclick="window.location.href='tienda-negra.html'">🌑 Tienda Negra</button>
        </div>

        <button onclick="toggleSubmenu('submenuEquipar')">⚔ Equipamiento ▾</button>
        <div class="submenu" id="submenuEquipar">
            <button onclick="window.location.href='equipar-mascota.html'">Mascota</button>
            <button onclick="window.location.href='equipar-titulo.html'">Título</button>
            <button onclick="window.location.href='equipar-personaje.html'">Personaje</button>
        </div>

        <button onclick="window.location.href='misiones.html'">📜 Misiones</button>
        <button onclick="window.location.href='titulos.html'">🎖 Títulos</button>
        <button onclick="window.location.href='clasificacion.html'">🏆 Clasificación</button>
        <button onclick="if(confirm('¿Cerrar sesión?')) { localStorage.clear(); window.location.href='index.html'; }">🚪 Salir</button>
    </div>
`;

// Inyectar el menú al principio del body
document.body.insertAdjacentHTML('afterbegin', menuHTML);

function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

function toggleSubmenu(id) {
    let el = document.getElementById(id);
    el.style.display = (el.style.display === "block") ? "none" : "block";
}
