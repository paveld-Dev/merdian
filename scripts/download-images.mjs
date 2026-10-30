import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  {
    name: 'featured-04-night.jpg',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'testimonial-terrace.jpg',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85'
  },
  {
    name: 'mat-travertine.jpg',
    url: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'mat-concrete.jpg',
    url: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'mat-smoked-oak.jpg',
    url: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'mat-brushed-brass.jpg',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'mat-raw-linen.jpg',
    url: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'mat-basalt.jpg',
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'room-living.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'room-master.jpg',
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'room-gallery.jpg',
    url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'journal-01.jpg',
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    name: 'journal-02.jpg',
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    name: 'journal-03.jpg',
    url: 'https://images.unsplash.com/photo-1600566753086-2d8544e4b52c?auto=format&fit=crop&w=1000&q=85'
  }
];

const destDir = path.join(process.cwd(), 'public', 'images');

async function download(item) {
  const filePath = path.join(destDir, item.name);
  if (fs.existsSync(filePath)) {
    console.log(`Exists: ${item.name}`);
    return;
  }
  return new Promise((resolve, reject) => {
    https.get(item.url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          const file = fs.createWriteStream(filePath);
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${item.name}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        const file = fs.createWriteStream(filePath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${item.name}`);
          resolve();
        });
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const item of images) {
    try {
      await download(item);
    } catch (e) {
      console.error(`Failed ${item.name}`, e);
    }
  }
  console.log('Finished downloads.');
}

run();
