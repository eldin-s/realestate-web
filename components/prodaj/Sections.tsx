import CustomButton from '@/components/custom/CustomButton'

interface BlogPost {
  id: number
  subtitle: string
  title: string
  text: string
  image: string
  buttonText: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    subtitle: "Force Mansion Studio",
    title: "Svetlo, Kamera, Force Mansion",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet perferendis ab, accusantium maxime voluptatum reprehenderit architecto sed eius adipisci quia!",
    image: "/img/buildings.jpg",
    buttonText: "Posetite studio"
  },
  {
    id: 2,
    subtitle: "Force Mansion Statistika",
    title: "Tehnološki zasnovana rešenja za sve",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet perferendis ab, accusantium maxime voluptatum reprehenderit architecto sed eius adipisci quia!",
    image: "/img/buildings.jpg",
    buttonText: "Saznajte više"
  },
  {
    id: 3,
    subtitle: "Force Mansion Analitika",
    title: "Oslobodite potencijal svog doma smelim idejama",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet perferendis ab, accusantium maxime voluptatum reprehenderit architecto sed eius adipisci quia!",
    image: "/img/buildings.jpg",
    buttonText: "Istražite"
  }
]

const Sections = () => {
  return (
    <section className="w-full lg:p-12 p-6 relative bg-foreground">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-20">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 items-center"
            >
              {/* Image */}
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${
                index % 2 === 0 ? 'lg:order-2 lg:pl-14' : 'lg:order-1 lg:pr-14'
              }`}>
                <div className='space-y-6'>
                  <p className="text-ring font-bold text-sm uppercase tracking-wide">
                    {post.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-5xl font-extrabold text-card">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed lg:max-w-2/3">
                    {post.text}
                  </p>
                </div>
                
                <CustomButton showArrow={true}>{post.buttonText}</CustomButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sections