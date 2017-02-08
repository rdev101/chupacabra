-- Table: public.schedule

-- DROP TABLE public.schedule;

CREATE TABLE public.schedule
(
  client_id bigint NOT NULL,
  provider_id bigint NOT NULL,
  start_date date NOT NULL,
  end_data date NOT NULL,
  is_primary_provider boolean NOT NULL DEFAULT true,
  CONSTRAINT schedule___fk_client_id FOREIGN KEY (client_id)
      REFERENCES public.clients (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT schedule___fk_provider_id FOREIGN KEY (provider_id)
      REFERENCES public.providers (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.schedule
  OWNER TO roh;

