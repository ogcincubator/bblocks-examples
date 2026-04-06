import json
import random
import math

data = json.loads(input_data)

if 'features' in data or 'geometry' in data:
    output_data = input_data
else:
    # Iberian Peninsula bounding box (approx): lon -9.5 to 3.3, lat 36.0 to 43.8
    LON_MIN, LON_MAX = -9.5, 3.3
    LAT_MIN, LAT_MAX = 36.0, 43.8

    num_points = random.randint(3, 5)

    cx = random.uniform(LON_MIN + 1, LON_MAX - 1)
    cy = random.uniform(LAT_MIN + 1, LAT_MAX - 1)
    radius_lon = random.uniform(0.3, 1.0)
    radius_lat = random.uniform(0.3, 1.0)

    angles = sorted(random.uniform(0, 2 * math.pi) for _ in range(num_points))
    ring = [
        [
            round(cx + radius_lon * math.cos(a), 6),
            round(cy + radius_lat * math.sin(a), 6),
        ]
        for a in angles
    ]
    ring.append(ring[0])  # close the ring

    output_data = json.dumps({
        'type': 'Feature',
        'geometry': {
            'type': 'Polygon',
            'coordinates': [ring],
        },
        'properties': data,
    })
