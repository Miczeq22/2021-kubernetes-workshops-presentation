import React from 'react';
import ReactDOM from 'react-dom';
import TheStoryGif from './assets/the-story.gif';
import SkargaJanusz from './assets/skarga-janusz.jpg';
import K8sSolves from './assets/k8s-solves.jpg';
import BackToWorkGif from './assets/back-to-work.gif';
import KubeComponents from './assets/kube-components.png';
import Minikube from './assets/minikube.jpg';
import PdkGif from './assets/pdk.gif';
import SwaggerDocs from './assets/swagger-docs.png';
import MorePods from './assets/more-pods.jpg';
import BossThanks from './assets/boss-thanks.jpg';
import JanuszPrzestoj from './assets/janusz-przestoj.jpg';
import Porty from './assets/porty.jpg';
import Przodownik from './assets/przodownik.jpg';

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes
} from 'spectacle';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Montserrat"',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  },
  colors: {
    primary: '#F1FFFA',
    secondary: '#7692FF',
    tertiary: '#1B1F3B',
    quaternary: '#EC4E20',
    yellow: '#F6FEAA'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="center">
        <Heading color="yellow" fontSize="120px">
          Howdy Exlabs! ????????
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="90px">
          Kubernetes Workshops ????
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="90px">
          Historia ????
        </Heading>
        <Image src={TheStoryGif} height="350px" marginTop={50} />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>BZDP</Heading>
      <Appear>
        <Text fontSize={90} textAlign="center">
          Bank Zmierzaj??cy Do Przysz??o??ci
        </Text>
      </Appear>
      <FlexBox paddingTop={100} flexDirection="column">
        <Appear>
          <Text>*Zbie??no???? nazw/nazwisk jest przypadkowa.</Text>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Wracamy z urlopu</Heading>
      <FlexBox paddingTop={100} flexDirection="column">
        <Image src={BackToWorkGif} />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Backend API</Heading>
      <FlexBox flexDirection="column">
        <Image src={SwaggerDocs} height="550px" />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Prezes <Appear>Szymon Pr??cion</Appear>
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={SkargaJanusz} height={450} />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        #pdk
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={PdkGif} height={350} />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Problem
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Kontener czasami umiera i trzeba go uruchamia?? manualnie
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              W godzinach szczytu klienci si?? skar????, ??e aplikacja dzia??a wolno
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Rozwi??zanie
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={K8sSolves} height={450} />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Spoiler Alert
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Heading fontSize={80}>Nie, nie jest.</Heading>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={50}>
        Kubernetes <Appear>Orkiestrator Kontener??w</Appear>
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Zapewnia, ??e zasoby s?? wykorzystywane efektywnie iw ramach
              ogranicze??.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zapewnia to, ??e us??ugi s?? (prawie) zawsze uruchomione.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zapewnia odporno???? na awarie i wysok?? dost??pno????.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zapewnia, ??e zostanie wdro??ona okre??lona liczba replik.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Kontener jako jednostka wdro??eniowa.</ListItem>
          </Appear>
          <Appear>
            <ListItem>Dzia??a na klastrze.</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Komponenty Kubernetes
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={KubeComponents} height="70%" />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Uruchomienie Klastra
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={Minikube} height="70%" />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Uruchomienie Klastra
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <CodePane language="sh">
            {`
              minikube start --vm-driver=hyperkit
              minikube addons enable ingress
            `}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Pierwszy komponent - Pod ????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>Najmniejsza jednostka w Kubernetes</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Wrapper na kontener, kt??ry dostaje pami????, CPU oraz prywatny adres
              IP
            </ListItem>
          </Appear>
        </UnorderedList>
        <Appear>
          <CodePane language="sh">
            {`
              kubectl run postgres-db --image postgres
              kubectl get pods
              kubectl describe pod postgres-db
            `}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Pierwszy komponent - Pod ????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <ListItem>Najmniejsza jednostka w Kubernetes</ListItem>
          <ListItem>
            Wrapper na kontener, kt??ry dostaje pami????, CPU oraz prywatny adres
            IP
          </ListItem>
        </UnorderedList>
        <Appear>
          <CodePane language="sh">
            {`
              kubectl delete pod postgres-db
              kubectl run postgres-db --image postgres --env POSTGRES_PASSWORD=root
              kubectl describe pod postgres-db
            `}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Podej??cie deklaratywne
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <CodePane language="yaml">
            {`
              apiVersion: v1
              kind: Pod
              metadata:
                name: postgres-db
                labels:
                  name: postgres-db
              spec:
                containers:
                  - name: postgres-db
                    image: postgres
                    env:
                      - name: POSTGRES_PASSWORD
                        value: root
                      - name: POSTGRES_USER
                        value: root
                      - name: POSTGRES_DB
                        value: data
            `}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Wiele kontener??w w jednym podzie?
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <CodePane language="yaml">
            {`
            ...
                containers:
                  - name: postgres-db
                    image: postgres
                    env:
                      ...
                  - name: bzdp-api
                    image: bzdp-api:0.0.1
            ...

            `}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        ??????????????? Zadanie - dodaj brakuj??ce zmienne ??rodowiskowe do bzdp-api
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <UnorderedList>
            <ListItem>POSTGRES_USER - root</ListItem>
            <ListItem>POSTGRES_PASSWORD -root </ListItem>
            <ListItem>POSTGRES_DB - data</ListItem>
            <ListItem>POSTGRES_PORT - 5432</ListItem>
            <ListItem>POSTRGRES_HOSTNAME - localhost</ListItem>
          </UnorderedList>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        ???? Rozwi??zanie
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <CodePane language="yaml">
            {`
            ...
                containers:
                  - name: bzdp-api
                    image: bzdp-api:0.0.1
                    env:
                      - name: POSTGRES_USER
                        value: "root"
                      - name: POSTGRES_PASSWORD
                        value: "root"
                      - name: POSTGRES_DB
                        value: "root"
                      - name: POSTGRES_PORT
                        value: "root"
                      - name: POSTRGRES_HOSTNAME
                        value: "localhost"
                      - name: POSTGRES_PORT
                        value: "5432"
            ...

            `}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Monitorowanie pod??w ????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              livenessProbe - potwierdza czy kontener mo??e by?? uruchomiony czy
              jednak musi zosta?? zrestartowany
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              readinessProbe - potwierdza czy kontener jest gotowy przyjmowa??
              zapytania
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Przyk??ad wykorzystania readinessProbe
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <CodePane language="yaml">
            {`
            ...
                containers:
                  - name: bzdp-api
                    image: bzdp-api:0.0.1
                    readinessProbe:
                      httpGet:
                        path: /this/path/does-not-exist
                        port: 8080
                      initialDelaySeconds: 5
                      timeoutSeconds: 2
                      periodSeconds: 5
                      failureThreshold: 1
            ...
            `}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        readinessProbe - wyja??nienie konfiguracji
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList fontSize={35}>
          <Appear>
            <ListItem>path - na jaki path ma zosta?? wys??ane zapytanie</ListItem>
          </Appear>
          <Appear>
            <ListItem>port - na jaki port ma zosta?? wys??ane zapytanie</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              initialDelaySeconds - o ile sekund ma zosta?? op????nione pierwsze
              zapytanie o status - domy??lnie 2s
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              timeoutSeconds - jaki jest maksymalny timeout na zapytanie -
              domy??lnie 1s
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              periodSeconds - je??eli zostanie zwr??cony kod b????du za ile powinna
              by?? kolejna pr??ba - domy??lnie 10s
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              failureThreshold - okre??lamy liczb?? niepowodze?? na jak?? pozwalamy,
              po przekroczeniu Kubernetes zaprzestanie odpytywa?? status -
              domy??lnie 3
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        ??????????????? Zadanie - dodaj readinessProbe do bzdp-api
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>Zapytanie GET na adres /system/health, ten sam port co API</Text>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        To mo??e dodajmy drugie api ????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <CodePane language="yaml">
            {`
            ...
                containers:
                  - name: bzdp-api-1
                    image: bzdp-api:0.0.1
                    ...
                  - name: bzdp-api-2
                    image: bzdp-api:0.0.1
                    ...
                  - name: postgres-db
                    image: postgres
                    ...
            ...
            `}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={55}>
        Anti-pattern ??????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={MorePods} height={570} />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={70}>
        Nasz pierwszy kontroler - ReplicaSet
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Zapewnia, ??e okre??lona liczba pod??w jest zawsze uruchomiona
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Odpowiedzialna za skalowalno???? pod??w</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zapewnia self-healing, dop??ki jest zapewniona wymagana ilo????
              zasob??w (CPU, pami????)
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={70}>
        Definicja ReplicaSet
      </Heading>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="yaml">
          {`
              apiVersion: apps/v1
              kind: ReplicaSet
              metadata:
                name: bzdp-api
                labels:
                  name: bzdp-api
              spec:
                selector:
                  matchLabels:
                    name: bzdp-api
                    type: backend
                replicas: 2
                template:
                  metadata:
                    labels:
                      name: bzdp-api
                      type: backend
                  spec:
                    containers:
                    - name: bzdp-api
                      image: miczeq22/bzdp-api:0.0.1
                      ...

            `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={70}>
        Jak wygl??da relacja Pod - ReplicaSet?
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              ReplicaSet obserwuje czy istnieje odpowiednia ilo???? pod??w z
              konkretnymi labelami (selector.matchLabels)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Je??eli nie ReplicaSet tworzy pody zgodnie z tym co ma okre??lone w
              template.spec
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={70}>
        Praktyczne sprawdzenie
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>Zobaczmy jakie pody maj?? labele</Text>
        <CodePane language="bash">
          {`
            kubectl get pods --show-labels
          `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={70}>
        Praktyczne sprawdzenie
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>Teraz usu??my jeden z labeli (znak "-" oznacza usuni??cie)</Text>
        <CodePane language="bash">
          {`
            POD_NAME=$(kubectl get pods -o name | tail -1)
            kubectl label $POD_NAME type-
            kubectl describe $POD_NAME
            kubectl get pods
          `}
        </CodePane>
        <Text>
          ReplicaSet utworzy nam kolejny pod poniewa?? nie ma dw??ch pod??w z
          odpowiednimi labelami
        </Text>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={70}>
        Praktyczne sprawdzenie
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>Dodajmy z powrotem label do poda</Text>
        <CodePane language="bash">
          {`
            kubectl label $POD_NAME type=backend
          `}
        </CodePane>
        <Text>
          Teraz znowu b??dziemy mieli dwa pody poniewa?? ReplicaSet usunie
          nadmiarowy
        </Text>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={50}>
        ReplicaSet jest na prawd?? prosta ????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={BossThanks} />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        ??????????????? Zadanie - stw??rz osobny plik postgres.yaml i dodaj odpowiedni??
        definicje ReplicaSet dla postgres
      </Heading>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Nowy problem - localhost nie dzia??a
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Gdy kontenery s?? w tym samym podzie to wsp????dziel?? zasoby, mi??dzy
              innymi localhost
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Gdy kontenery s?? na dw??ch osobnych podach powstaje problem z
              komunikacj??
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Mo??emy u??y?? adres IP poda, natomiast jest on dosy?? zmienny
              poniewa?? pody nie ??yj?? zbyt d??ugo a przy ponownym stworzeniu poda
              dostaniemy inny adres IP...
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Rozwi??zanie - Service
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Serwisy udost??pniaj?? adresy, przez kt??re mo??emy skomunikowa?? si?? z
              powi??zanymi Podami.
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Upewnijmy si??, ??e nasz pod udost??pnia containerPort
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="yaml">
          {`
            ...
            containers:
            - name: bzdp-api
              image: miczeq22/bzdp-api:0.0.1
              ports:
                - containerPort: 5000
                  protocol: TCP
            ...
          `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Gdy znamy port, mo??emy ujawni?? zas??b ????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="bash">
          {`
            kubectl expose rs bzdp-api --name=bzdp-api-svc --target-port=5000 --type=NodePort
          `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Mo??emy podejrze?? nas serwis przy u??yciu Minikube
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="yaml">
          {`
            minikube service bzdp-api-svc
          `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        Typy Service
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              ClusterIP - (domy??lny typ) udost??pnia port tylko wewn??trz klastra.
              Taki port nie by??by dost??pny z dowolnego miejsca z zewn??trz.
              ClusterIP jest przydatny, gdy chcemy umo??liwi?? komunikacj?? mi??dzy
              Podami i nadal uniemo??liwia?? dost??p z zewn??trz.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              NodePort - tworzy automatycznie ClusterIP oraz Serwis jest
              dost??pny z zewn??trz.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              LoadBalancer - Typ LoadBalancer jest przydatny w po????czeniu z load
              balancerem dostawcy chmury.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              ExternalName - Typ ExternalName mapuje us??ug?? na adres zewn??trzny
              (np. exlabs.pl).
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Tworzenie Service deklaratywne
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="yaml">
          {`
            apiVersion: v1
            kind: Service
            metadata:
              name: bzdp-api-svc
            spec:
              type: NodePort
              selector:
                name: bzdp-api
              ports:
              - port: 4000
                targetPort: 4000
          `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Jak Service jest po????czony z podami?
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="yaml">
          {`
            kubectl get ep bzdp-api-svc -o yaml
          `}
        </CodePane>
      </FlexBox>
      <Text>Serwis tworzy endpointy, kt??re wskazuj?? adresy IP pod??w</Text>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        Znowu readinessProbe i livenessProbe
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              ReadinessProbe powinien by?? u??ywany jako wskazanie, ??e Service
              jest gotowy do obs??ugi ????da??. Tylko kontenery ze stanem
              readinessProbe ustawionym na Success b??d?? odbiera?? ????dania
              przechodz??ce przez Service.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Podczas gdy livenessProbe jest u??ywany do okre??lenia, czy Pod jest
              aktywny lub czy powinien zosta?? zast??piony nowym, readinessProbe
              jest u??ywany przez iptables.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Pod, kt??ry nie przejdzie przez readinessProbe, zostanie wykluczony
              i nie b??dzie otrzymywa?? ????da??.
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={75}>
        Service discovery ?????????????????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>DNS</ListItem>
          </Appear>
          <Appear>
            <ListItem>Zmienne ??rodowiskowe</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              ??atwiejszy i przyjemniejszy jest DNS i go u??yjemy
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={75}>
        Service discovery ?????????????????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="yaml">
          {`
            ...
                containers:
                - name: bzdp-api
                  image: miczeq22/bzdp-api:0.0.1
                  env:
                    - name: POSTRGRES_HOSTNAME
                      value: postgres-svc
            ...
          `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={55}>
        ??????????????? Zadanie - dodaj serwis ClusterIP do postgres i nadaj komunikacje API
        - Postgres
      </Heading>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={75}>
        Load Balancer?
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="yaml">
          {`
            ...
                containers:
                - name: bzdp-api
                  image: miczeq22/bzdp-api:0.0.2
            ...
          `}
        </CodePane>
        <Appear>
          <Text>
            Aby zastosowa?? zmiany musimy zmniejszy?? liczb?? replik do 0 i znowu
            zwi??szy?? do interesuj??cej nas liczby
          </Text>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={75}>
        Niechciany przest??j
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={JanuszPrzestoj} height="65%" />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={75}>
        Da si?? to zrobi?? lepiej - Deployment ????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Aktualizowanie aplikacji bez przestoj??w. (Zero Downtime
              Deployment)
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={35}>
        Definicja Deployment
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="yaml">
          {`
            apiVersion: apps/v1
            kind: Deployment
            metadata:
              name: bzdp-api
            spec:
              replicas: 2
              strategy:
                type: RollingUpdate
              selector:
                matchLabels:
                  app: bzdp-api
              template:
                metadata:
                  labels:
                    app: bzdp-api
                spec:
                  containers:
                  - name: bzdp-api
                    image: miczeq22/bzdp-api:0.0.1
                    ...
            `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Strategie Deployment
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Recreate - Zabija wszystkie pody przed aktualizacj??. Oznacza to,
              ??e mamy przest??j. Przydatne gdy nasza aplikacja jest "stateful"
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              RollingUpdate - Domy??lna strategia. Pozwala nam wdra??a?? nowe
              wersje bez przestoj??w. Tworzy nowy zestaw ReplicaSet z zerowymi
              replikami i w zale??no??ci od innych parametr??w zwi??ksza repliki
              nowej, a zmniejsza te ze starej. Proces ko??czy si??, gdy repliki
              nowego zestawu ReplicaSet ca??kowicie zast??puj?? te ze starego.
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Konfiguracja RollingUpdate
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList fontSize={35}>
          <Appear>
            <ListItem>
              maxSurge - okre??la maksymaln?? liczb?? pod??w, kt??ra mo??e przekroczy??
              ????dan?? liczb?? (ustawion?? za pomoc?? replik). Mo??e by?? ustawiona na
              liczb?? bezwzgl??dn?? (np. 2) lub procent (np. 35%). Ca??kowita liczba
              pod??w nigdy nie przekroczy ????danej liczby (ustawionej za pomoc??
              replik) i ????cznej warto??ci maxSurge. Warto???? domy??lna to 25%.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              maxUnavailable - okre??la maksymaln?? liczb?? pod??w, kt??re nie
              dzia??aj??. Je??li na przyk??ad liczba replik jest ustawiona na 15, a
              to pole jest ustawione na 4, minimalna liczba pod??w, kt??re b??d??
              dzia??a?? w danym momencie, wyniesie 11. Podobnie jak pole maxSurge,
              to r??wnie?? domy??lnie ma warto???? 25%. Je??li to pole nie jest
              okre??lone, zawsze b??dzie co najmniej 75% dzia??aj??cych pod??w.
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Historia Wdro??e??
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>Aby wy??wietli?? histori?? wdro??e??, nale??y u??y??:</Text>
        <CodePane language="sh">
          {`
              kubectl rollout history -f deployment.yaml
          `}
        </CodePane>
        <Appear>
          <Text>
            Zobaczymy, historie wdro??e??, dodatkowo gdy podejrzymy ReplicaSet
            zobaczymy, ??e mamy tak?? sam?? ilo???? rs dla tego deployment.
          </Text>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Rollback
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>Aby zrobi?? rollback deployment wystarczy u??y??:</Text>
        <CodePane language="sh">
          {`
              kubectl rollout undo -f deployment.yaml
          `}
        </CodePane>
        <Appear>
          <Text>
            Jak podejrzymy teraz histori?? wdro??e?? zobaczymy, ??e rollout
            przeni??s?? nam najstarsz?? wersj?? do najnowszej (przenios??o revision
            number z 1 na 3).
          </Text>
        </Appear>
        <Appear>
          <Text fontSize={30}>
            Poniewa?? nowe wdro??enia nie niszcz?? ReplicaSets, ale skaluj?? je do
            0, wszystko, co trzeba zrobi??, aby cofn???? ostatni?? zmian??, to
            przeskalowa?? je z powrotem do po????danej liczby replik i jednocze??nie
            przeskalowa?? obecn?? do zera.
          </Text>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Rollback o kilka wersji w ty??
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>
          Aby zrobi?? rollback deployment do wybranej wersji wystarczy doda??
          flag??:
        </Text>
        <CodePane language="sh">
          {`
              kubectl rollout undo -f deployment.yaml --to-revision=2
          `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Skalowanie replik z poziomu konsoli
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>
          Czasami u??yteczne jest zeskalowanie replik na chwil?? w tym celu
          przydatna jest komenda:
        </Text>
        <CodePane language="sh">
          {`
              kubectl scale deployment <nazwa> --replicas 8
          `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading color="yellow" fontSize={65}>
          Dodajmy kolejny deployment i service dla Adminer
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Kolejny problem...
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={Porty} />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Ingress ??????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Ingress zarz??dzaj zewn??trznym dost??pem do aplikacji dzia??aj??cych w
              klastrze Kubernetes.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zapewnia dost??p przez zwyk??y HTTP (port 80) lub HTTPS (port 443)
              do us??ug.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Pozwala na trzymanie certyfikat??w SSL.</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zamiast kontrolera kube-controller-manager oferuje zas??b Ingress,
              z kt??rego mog?? korzysta?? inne rozwi??zania innych firm, aby
              zapewni?? przekazywanie ????da?? i funkcje SSL.{' '}
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Instalacja NGINX Ingress
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>Minikube</Text>
        <CodePane language="sh">
          {`
              minikube addons enable ingress
          `}
        </CodePane>
        <Text>DockerForMac/DockerForWindows</Text>
        <CodePane language="sh">
          {`
              kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.4/deploy/static/provider/cloud/deploy.yaml
          `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading color="yellow" fontSize={65}>
          Przyk??adowa konfiguracja NGINX Ingress
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <CodePane language="yaml">
            {`
              apiVersion: networking.k8s.io/v1
              kind: Ingress
              metadata:
                name: ingress-srv
                labels:
                  name: ingress-srv
                annotations:
                  kubernetes.io/ingress.class: nginx
                  nginx.ingress.kubernetes.io/use-regex: "true"
                  nginx.ingress.kubernetes.io/rewrite-target: /$1
              spec:
                rules:
                  - host: bzdp.pl
                    http:
                      paths:
                        - pathType: Prefix
                          path: /api/(.*)
                          backend:
                            service:
                              name: platforms-service-api-svc
                              port:
                                number: 4000
              `}
          </CodePane>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        Default Backend
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text fontSize={25}>
          W niekt??rych przypadkach chcemy zdefiniowa?? domy??lne zachowanie, np
          path nie zostanie znaleziony
        </Text>
        <CodePane language="yaml">
          {`
              apiVersion: networking.k8s.io/v1
              kind: Ingress
              metadata:
                name: default
                annotations:
                  kubernetes.io/ingress.class: "nginx"
                  ingress.kubernetes.io/ssl-redirect: "false"
                  nginx.ingress.kubernetes.io/ssl-redirect: "false"
              spec:
                backend:
                  serviceName: platforms-service-api-svc
                  servicePort: 4000
          `}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading color="yellow" fontSize={65}>
          ??????????????? Zadanie: Dodaj path /adminer i podepnij obraz adminera pod ten path
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Bonus: Job
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Text>
            Mo??emy wykorzysta?? istniej??cy obraz do uruchamiania pojedynczych
            zada?? np. migracja
          </Text>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <CodePane language="yaml">{`
            apiVersion: batch/v1
            kind: Job
            metadata:
              name: db-migration-job
            spec:
              ttlSecondsAfterFinished: 100
              backoffLimit: 3
              template:
                spec:
                  containers:
                  - name: bzdp-api-migration-job
                    image: miczeq22/bzdp-api:0.0.1
                    command: ["npm",  "run", "migration"]
                    env:
                      - name: POSTGRES_PORT
                        value: "5432"
                        ...
                  restartPolicy: Never
          `}</CodePane>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Congratulations! ????
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={Przodownik} />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Dzi??ki za uwag??!</Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text color="yellow" fontWeight="bold">
          @Miko??aj Wargowski
        </Text>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
