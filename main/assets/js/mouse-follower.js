/**
 * TEDx Minna Custom Mouse Follower
 * Enhanced cursor with TEDx red theme and interactive effects
 */

class TEDxMouseFollower {
    constructor() {
        this.mouseFollower = null;
        this.cursorOutline = null;
        this.cursorDot = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.outlineX = 0;
        this.outlineY = 0;
        this.dotX = 0;
        this.dotY = 0;
        
        this.init();
    }

    init() {
        // Check if device supports hover (desktop)
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            return; // Don't initialize on touch devices
        }

        this.createCursor();
        this.bindEvents();
        this.animate();
    }

    createCursor() {
        // Find existing mouse-follower or create new one
        this.mouseFollower = document.querySelector('.mouse-follower');
        
        if (!this.mouseFollower) {
            this.mouseFollower = document.createElement('div');
            this.mouseFollower.className = 'mouse-follower';
            document.body.appendChild(this.mouseFollower);
        }

        // Clear existing content
        this.mouseFollower.innerHTML = '';

        // Create cursor elements
        this.cursorOutline = document.createElement('span');
        this.cursorOutline.className = 'cursor-outline';
        
        this.cursorDot = document.createElement('span');
        this.cursorDot.className = 'cursor-dot';

        this.mouseFollower.appendChild(this.cursorOutline);
        this.mouseFollower.appendChild(this.cursorDot);
    }

    bindEvents() {
        // Mouse move event
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        // Hover effects for different elements
        this.addHoverEffects();

        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            this.mouseFollower.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            this.mouseFollower.style.opacity = '1';
        });
    }

    addHoverEffects() {
        // Headings
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            heading.addEventListener('mouseenter', () => {
                this.mouseFollower.classList.add('highlight-cursor-head');
            });
            heading.addEventListener('mouseleave', () => {
                this.mouseFollower.classList.remove('highlight-cursor-head');
            });
        });

        // Paragraphs
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.addEventListener('mouseenter', () => {
                this.mouseFollower.classList.add('highlight-cursor-para');
            });
            p.addEventListener('mouseleave', () => {
                this.mouseFollower.classList.remove('highlight-cursor-para');
            });
        });

        // Buttons
        const buttons = document.querySelectorAll('button, .btn, input[type="submit"], input[type="button"]');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                this.mouseFollower.classList.add('highlight-cursor-btn');
            });
            btn.addEventListener('mouseleave', () => {
                this.mouseFollower.classList.remove('highlight-cursor-btn');
            });
        });

        // Links
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                this.mouseFollower.classList.add('highlight-cursor-link');
            });
            link.addEventListener('mouseleave', () => {
                this.mouseFollower.classList.remove('highlight-cursor-link');
            });
        });

        // Images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                this.mouseFollower.classList.add('highlight-cursor-img');
            });
            img.addEventListener('mouseleave', () => {
                this.mouseFollower.classList.remove('highlight-cursor-img');
            });
        });

        // Text inputs
        const textInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');
        textInputs.forEach(input => {
            input.addEventListener('mouseenter', () => {
                this.mouseFollower.classList.add('highlight-cursor-text');
            });
            input.addEventListener('mouseleave', () => {
                this.mouseFollower.classList.remove('highlight-cursor-text');
            });
        });

        // TEDx special elements
        const tedxElements = document.querySelectorAll('.tedx-element, .talk-card, .speaker-card, .blog-card');
        tedxElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add('tedx-element');
            });
            element.addEventListener('mouseleave', () => {
                element.classList.remove('tedx-element');
            });
        });
    }

    animate() {
        // Smooth animation for cursor movement
        const lerp = (start, end, factor) => start + (end - start) * factor;

        const updateCursor = () => {
            // Smooth movement for outline (slower)
            this.outlineX = lerp(this.outlineX, this.mouseX, 0.1);
            this.outlineY = lerp(this.outlineY, this.mouseY, 0.1);

            // Faster movement for dot
            this.dotX = lerp(this.dotX, this.mouseX, 0.8);
            this.dotY = lerp(this.dotY, this.mouseY, 0.8);

            // Apply positions
            if (this.cursorOutline) {
                this.cursorOutline.style.left = this.outlineX + 'px';
                this.cursorOutline.style.top = this.outlineY + 'px';
            }

            if (this.cursorDot) {
                this.cursorDot.style.left = this.dotX + 'px';
                this.cursorDot.style.top = this.dotY + 'px';
            }

            requestAnimationFrame(updateCursor);
        };

        updateCursor();
    }

    // Public methods for external control
    show() {
        if (this.mouseFollower) {
            this.mouseFollower.style.opacity = '1';
        }
    }

    hide() {
        if (this.mouseFollower) {
            this.mouseFollower.style.opacity = '0';
        }
    }

    setLoading(isLoading) {
        if (this.mouseFollower) {
            if (isLoading) {
                this.mouseFollower.classList.add('loading');
            } else {
                this.mouseFollower.classList.remove('loading');
            }
        }
    }

    setDisabled(isDisabled) {
        if (this.mouseFollower) {
            if (isDisabled) {
                this.mouseFollower.classList.add('disabled');
            } else {
                this.mouseFollower.classList.remove('disabled');
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if not on mobile
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        window.tedxMouseFollower = new TEDxMouseFollower();
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TEDxMouseFollower;
}