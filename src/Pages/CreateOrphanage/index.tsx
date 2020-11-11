import React, { ChangeEvent, FormEvent, useState } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';

import { FiPlus } from "react-icons/fi";

import './create-orphanage.css';
import Sidebar from "../../components/Sidebar";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";

import { LeafletMouseEvent } from "leaflet";
import { useHistory } from "react-router-dom";



export default function CreateOrphanage() {

  const history= useHistory()
  
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpening_hours] = useState('');
  const [opens_on_weekends, setopens_on_weekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng
    setPosition({
      latitude: lat,
      longitude: lng
    })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = new FormData()
    const { latitude, longitude } = position

    data.append("name", name)
    data.append("about", about)
    data.append("latitude", String(latitude))
    data.append("longitude", String(longitude))
    data.append("instructions", instructions)
    data.append("opening_hours", opening_hours)
    data.append("opens_on_weekends", String(opens_on_weekends))
    images.forEach(image => data.append("images", image))

    await api.post('orphanages', data)
    alert("Cadastrado com sucesso")

    history.push('/app')

  }

  function handleSelectImages(e: ChangeEvent<HTMLInputElement>) {

    if (!e.target.files)
      return
    const selectedImages = Array.from(e.target.files)
    setImages(selectedImages)

    const selectedPreviewImages = selectedImages.map(
      image => URL.createObjectURL(image)
    )

    setPreviewImages(selectedPreviewImages)
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-25.9523097, 32.5927545]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              {
                position.latitude !== 0 && (
                  <Marker interactive={false} icon={mapIcon}
                    position={[position.latitude, position.longitude]} />
                )
              }
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300}
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>
              <div className="images-container">
                {
                  previewImages.map(image => {
                    return (
                      <img key={image} src={image} alt={name} />
                    )
                  })
                }
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input multiple
                type="file" id="image[]"
                onChange={handleSelectImages}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horas abertas</label>
              <input id="opening_hours"
                value={opening_hours}
                onChange={e => setOpening_hours(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button"
                  className={opens_on_weekends ? "active" : ''}
                  onClick={_ => setopens_on_weekends(true)}
                >
                  Sim
                </button>
                <button type="button"
                  className={!opens_on_weekends ? "active" : ''}
                  onClick={_ => setopens_on_weekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
