const stars = Array.from({ length: 90 }, () => {
    const size = 1 + Math.random() * 1.5;
    const brightness = 0.3 + Math.random() * 0.7;

    return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${size}px`,
        opacity: brightness,
        glow: `0 0 ${2 + brightness * 7}px rgba(255, 255, 255, ${brightness})`,
    };
});

const meteors = [
    { left: '82%', top: '4%', delay: '0s', duration: '5.5s' },
    { left: '56%', top: '12%', delay: '2.1s', duration: '6s' },
    { left: '96%', top: '27%', delay: '4.4s', duration: '5s' },
    { left: '73%', top: '39%', delay: '1.3s', duration: '6.5s' },
    { left: '43%', top: '2%', delay: '5.7s', duration: '5.8s' },
    { left: '108%', top: '53%', delay: '3.2s', duration: '6.2s' },
    { left: '66%', top: '68%', delay: '7s', duration: '5.3s' },
];

export function StarBackground() {
    return (
        <div className="starfield" aria-hidden="true">
            <div className="starfield__stars">
                {stars.map((star, index) => (
                    <span
                        className="starfield__star"
                        key={index}
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                            opacity: star.opacity,
                            boxShadow: star.glow,
                        }}
                    />
                ))}
            </div>
            <div className="starfield__meteors">
                {meteors.map((meteor, index) => (
                    <span
                        className="starfield__meteor"
                        key={index}
                        style={{
                            left: meteor.left,
                            top: meteor.top,
                            animationDelay: meteor.delay,
                            animationDuration: meteor.duration,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
