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
          Howdy Exlabs! 👋🏻
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="90px">
          Kubernetes Workshops 🐋
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="90px">
          Historia 📕
        </Heading>
        <Image src={TheStoryGif} height="350px" marginTop={50} />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>BZDP</Heading>
      <Appear>
        <Text fontSize={90} textAlign="center">
          Bank Zmierzający Do Przyszłości
        </Text>
      </Appear>
      <FlexBox paddingTop={100} flexDirection="column">
        <Appear>
          <Text>*Zbieżność nazw/nazwisk jest przypadkowa.</Text>
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
        Prezes <Appear>Szymon Prącion</Appear>
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
              Kontener czasami umiera i trzeba go uruchamiać manualnie
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              W godzinach szczytu klienci się skarżą, że aplikacja działa wolno
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Rozwiązanie
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
        Kubernetes <Appear>Orkiestrator Kontenerów</Appear>
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Zapewnia, że zasoby są wykorzystywane efektywnie iw ramach
              ograniczeń.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zapewnia to, że usługi są (prawie) zawsze uruchomione.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zapewnia odporność na awarie i wysoką dostępność.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zapewnia, że zostanie wdrożona określona liczba replik.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Kontener jako jednostka wdrożeniowa.</ListItem>
          </Appear>
          <Appear>
            <ListItem>Działa na klastrze.</ListItem>
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
        Pierwszy komponent - Pod 💊
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>Najmniejsza jednostka w Kubernetes</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Wrapper na kontener, który dostaje pamięć, CPU oraz prywatny adres
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
        Pierwszy komponent - Pod 💊
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <ListItem>Najmniejsza jednostka w Kubernetes</ListItem>
          <ListItem>
            Wrapper na kontener, który dostaje pamięć, CPU oraz prywatny adres
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
        Podejście deklaratywne
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
        Wiele kontenerów w jednym podzie?
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
        👨🏻‍🔬 Zadanie - dodaj brakujące zmienne środowiskowe do bzdp-api
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
        🧪 Rozwiązanie
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
        Monitorowanie podów 👀
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              livenessProbe - potwierdza czy kontener może być uruchomiony czy
              jednak musi zostać zrestartowany
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              readinessProbe - potwierdza czy kontener jest gotowy przyjmować
              zapytania
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={80}>
        Przykład wykorzystania readinessProbe
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
        readinessProbe - wyjaśnienie konfiguracji
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList fontSize={35}>
          <Appear>
            <ListItem>path - na jaki path ma zostać wysłane zapytanie</ListItem>
          </Appear>
          <Appear>
            <ListItem>port - na jaki port ma zostać wysłane zapytanie</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              initialDelaySeconds - o ile sekund ma zostać opóźnione pierwsze
              zapytanie o status - domyślnie 2s
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              timeoutSeconds - jaki jest maksymalny timeout na zapytanie -
              domyślnie 1s
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              periodSeconds - jeżeli zostanie zwrócony kod błędu za ile powinna
              być kolejna próba - domyślnie 10s
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              failureThreshold - określamy liczbę niepowodzeń na jaką pozwalamy,
              po przekroczeniu Kubernetes zaprzestanie odpytywać status -
              domyślnie 3
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        👨🏻‍🔬 Zadanie - dodaj readinessProbe do bzdp-api
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>Zapytanie GET na adres /system/health, ten sam port co API</Text>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        To może dodajmy drugie api 🤔
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
        Anti-pattern ☠️
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
              Zapewnia, że określona liczba podów jest zawsze uruchomiona
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Odpowiedzialna za skalowalność podów</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zapewnia self-healing, dopóki jest zapewniona wymagana ilość
              zasobów (CPU, pamięć)
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
        Jak wygląda relacja Pod - ReplicaSet?
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              ReplicaSet obserwuje czy istnieje odpowiednia ilość podów z
              konkretnymi labelami (selector.matchLabels)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Jeżeli nie ReplicaSet tworzy pody zgodnie z tym co ma określone w
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
        <Text>Zobaczmy jakie pody mają labele</Text>
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
        <Text>Teraz usuńmy jeden z labeli (znak "-" oznacza usunięcie)</Text>
        <CodePane language="bash">
          {`
            POD_NAME=$(kubectl get pods -o name | tail -1)
            kubectl label $POD_NAME type-
            kubectl describe $POD_NAME
            kubectl get pods
          `}
        </CodePane>
        <Text>
          ReplicaSet utworzy nam kolejny pod ponieważ nie ma dwóch podów z
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
          Teraz znowu będziemy mieli dwa pody ponieważ ReplicaSet usunie
          nadmiarowy
        </Text>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={50}>
        ReplicaSet jest na prawdę prosta 😎
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={BossThanks} />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        👨🏻‍🔬 Zadanie - stwórz osobny plik postgres.yaml i dodaj odpowiednią
        definicje ReplicaSet dla postgres
      </Heading>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Nowy problem - localhost nie działa
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Gdy kontenery są w tym samym podzie to współdzielą zasoby, między
              innymi localhost
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Gdy kontenery są na dwóch osobnych podach powstaje problem z
              komunikacją
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Możemy użyć adres IP poda, natomiast jest on dosyć zmienny
              ponieważ pody nie żyją zbyt długo a przy ponownym stworzeniu poda
              dostaniemy inny adres IP...
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Rozwiązanie - Service
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Serwisy udostępniają adresy, przez które możemy skomunikować się z
              powiązanymi Podami.
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Upewnijmy się, że nasz pod udostępnia containerPort
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
        Gdy znamy port, możemy ujawnić zasób 🔎
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
        Możemy podejrzeć nas serwis przy użyciu Minikube
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
              ClusterIP - (domyślny typ) udostępnia port tylko wewnątrz klastra.
              Taki port nie byłby dostępny z dowolnego miejsca z zewnątrz.
              ClusterIP jest przydatny, gdy chcemy umożliwić komunikację między
              Podami i nadal uniemożliwiać dostęp z zewnątrz.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              NodePort - tworzy automatycznie ClusterIP oraz Serwis jest
              dostępny z zewnątrz.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              LoadBalancer - Typ LoadBalancer jest przydatny w połączeniu z load
              balancerem dostawcy chmury.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              ExternalName - Typ ExternalName mapuje usługę na adres zewnętrzny
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
        Jak Service jest połączony z podami?
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <CodePane language="yaml">
          {`
            kubectl get ep bzdp-api-svc -o yaml
          `}
        </CodePane>
      </FlexBox>
      <Text>Serwis tworzy endpointy, które wskazują adresy IP podów</Text>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={45}>
        Znowu readinessProbe i livenessProbe
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              ReadinessProbe powinien być używany jako wskazanie, że Service
              jest gotowy do obsługi żądań. Tylko kontenery ze stanem
              readinessProbe ustawionym na Success będą odbierać żądania
              przechodzące przez Service.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Podczas gdy livenessProbe jest używany do określenia, czy Pod jest
              aktywny lub czy powinien zostać zastąpiony nowym, readinessProbe
              jest używany przez iptables.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Pod, który nie przejdzie przez readinessProbe, zostanie wykluczony
              i nie będzie otrzymywać żądań.
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={75}>
        Service discovery 🕵🏻‍♀️
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>DNS</ListItem>
          </Appear>
          <Appear>
            <ListItem>Zmienne środowiskowe</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Łatwiejszy i przyjemniejszy jest DNS i go użyjemy
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={75}>
        Service discovery 🕵🏻‍♀️
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
        👨🏻‍🔬 Zadanie - dodaj serwis ClusterIP do postgres i nadaj komunikacje API
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
            Aby zastosować zmiany musimy zmniejszyć liczbę replik do 0 i znowu
            zwięszyć do interesującej nas liczby
          </Text>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={75}>
        Niechciany przestój
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={JanuszPrzestoj} height="65%" />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={75}>
        Da się to zrobić lepiej - Deployment 🚀
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Aktualizowanie aplikacji bez przestojów. (Zero Downtime
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
              Recreate - Zabija wszystkie pody przed aktualizacją. Oznacza to,
              że mamy przestój. Przydatne gdy nasza aplikacja jest "stateful"
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              RollingUpdate - Domyślna strategia. Pozwala nam wdrażać nowe
              wersje bez przestojów. Tworzy nowy zestaw ReplicaSet z zerowymi
              replikami i w zależności od innych parametrów zwiększa repliki
              nowej, a zmniejsza te ze starej. Proces kończy się, gdy repliki
              nowego zestawu ReplicaSet całkowicie zastępują te ze starego.
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
              maxSurge - określa maksymalną liczbę podów, która może przekroczyć
              żądaną liczbę (ustawioną za pomocą replik). Może być ustawiona na
              liczbę bezwzględną (np. 2) lub procent (np. 35%). Całkowita liczba
              podów nigdy nie przekroczy żądanej liczby (ustawionej za pomocą
              replik) i łącznej wartości maxSurge. Wartość domyślna to 25%.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              maxUnavailable - określa maksymalną liczbę podów, które nie
              działają. Jeśli na przykład liczba replik jest ustawiona na 15, a
              to pole jest ustawione na 4, minimalna liczba podów, które będą
              działać w danym momencie, wyniesie 11. Podobnie jak pole maxSurge,
              to również domyślnie ma wartość 25%. Jeśli to pole nie jest
              określone, zawsze będzie co najmniej 75% działających podów.
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Historia Wdrożeń
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>Aby wyświetlić historię wdrożeń, należy użyć:</Text>
        <CodePane language="sh">
          {`
              kubectl rollout history -f deployment.yaml
          `}
        </CodePane>
        <Appear>
          <Text>
            Zobaczymy, historie wdrożeń, dodatkowo gdy podejrzymy ReplicaSet
            zobaczymy, że mamy taką samą ilość rs dla tego deployment.
          </Text>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Rollback
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>Aby zrobić rollback deployment wystarczy użyć:</Text>
        <CodePane language="sh">
          {`
              kubectl rollout undo -f deployment.yaml
          `}
        </CodePane>
        <Appear>
          <Text>
            Jak podejrzymy teraz historię wdrożeń zobaczymy, że rollout
            przeniósł nam najstarszą wersję do najnowszej (przeniosło revision
            number z 1 na 3).
          </Text>
        </Appear>
        <Appear>
          <Text fontSize={30}>
            Ponieważ nowe wdrożenia nie niszczą ReplicaSets, ale skalują je do
            0, wszystko, co trzeba zrobić, aby cofnąć ostatnią zmianę, to
            przeskalować je z powrotem do pożądanej liczby replik i jednocześnie
            przeskalować obecną do zera.
          </Text>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="yellow" fontSize={65}>
        Rollback o kilka wersji w tył
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text>
          Aby zrobić rollback deployment do wybranej wersji wystarczy dodać
          flagę:
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
          Czasami użyteczne jest zeskalowanie replik na chwilę w tym celu
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
        Ingress ✈️
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              Ingress zarządzaj zewnętrznym dostępem do aplikacji działających w
              klastrze Kubernetes.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zapewnia dostęp przez zwykły HTTP (port 80) lub HTTPS (port 443)
              do usług.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Pozwala na trzymanie certyfikatów SSL.</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Zamiast kontrolera kube-controller-manager oferuje zasób Ingress,
              z którego mogą korzystać inne rozwiązania innych firm, aby
              zapewnić przekazywanie żądań i funkcje SSL.{' '}
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
          Przykładowa konfiguracja NGINX Ingress
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
          W niektórych przypadkach chcemy zdefiniować domyślne zachowanie, np
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
          👨🏻‍🔬 Zadanie: Dodaj path /adminer i podepnij obraz adminera pod ten path
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
            Możemy wykorzystać istniejący obraz do uruchamiania pojedynczych
            zadań np. migracja
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
        Congratulations! 🎉
      </Heading>
      <FlexBox height="100%" flexDirection="column">
        <Appear>
          <Image src={Przodownik} />
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Dzięki za uwagę!</Heading>
      <FlexBox height="100%" flexDirection="column">
        <Text color="yellow" fontWeight="bold">
          @Mikołaj Wargowski
        </Text>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
