export interface Cerveza {
    id: number;
    attributes: {
      nombre: string;
      descripcion: string;
      precio: number;
      marca: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      envase: string;
      contenido: string;
      unidades: number;
      slug: string;
      novedad: null;
      graduacion: {
        data: null;
      };
      tipo: {
        data: {
          id: number;
          attributes: {
            nombre: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        };
      };
      foto: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null;
            caption: null;
            width: number;
            height: number;
            formats: {
              thumbnail: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                };
              };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null;
            provider: string;
            provider_metadata: {
              public_id: string;
              resource_type: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
      };
    };
  }
  

  export interface Pais {
    id: number;
    attributes: {
      Nombre: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }

  export interface Tipo {
    id: number;
    attributes: {
      nombre: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }
  
