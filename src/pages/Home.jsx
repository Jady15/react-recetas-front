import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="app-container">
            {/* SECCIÓN PRINCIPAL (HERO) */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <span className="hero-badge">Cocina saludable</span>
                            <h1 className="hero-title">
                                Tus recetas
                                <span className="accent-text"> Favoritas</span>
                            </h1>
                            <p className="hero-description">
                                Organiza y crea tus mejores recetas de cocina. Desde platos tradicionales hasta creaciones culinarias innovadoras. ¡El límite lo pones tú!
                            </p>
                            <div className="hero-buttons">
                                <button className="btn btn-primary">
                                    Crear Primera Receta
                                </button>
                                <button className="btn btn-secondary">
                                    Explorar Recetas
                                </button>
                            </div>
                        </div>
                        <div className="hero-image">
                            <div className="floating-card">
                                <div className="recipe-preview">
                                    <div className="recipe-image-placeholder"></div>
                                    <div className="recipe-info">
                                        <h4>Pasta Mediterránea</h4>
                                        <p>⏱️ 25 min • 👥 4 porciones</p>
                                        <div className="recipe-tags">
                                            <span className="tag">Vegetariano</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECCIÓN DE ESTADÍSTICAS */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">📝</div>
                            <h3>0</h3>
                            <p>Recetas creadas</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">⭐</div>
                            <h3>0</h3>
                            <p>Favoritas</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">🏷️</div>
                            <h3>5</h3>
                            <p>Categorías</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;